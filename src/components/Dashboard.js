import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Dashboard extends Component {
	state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

	render() {
		const { value } = this.state
    const { answeredQuestions, unansweredQuestions } = this.props

    //console.log(answeredQuestions)

		return (
			<div className='questions-container'>
				<Tabs value={value} onChange={this.handleChange}>
          <Tab label="Unanswered questions" />
          <Tab label="Answered questions" />
        </Tabs>

        {value === 0 && <TabContainer>
          {answeredQuestions.map((question) => (
            <Question key={question.id} id={question.id} />
          ))}
        </TabContainer>}

        {value === 1 && <TabContainer>
        	{unansweredQuestions.map((question) => (
            <Question key={question.id} id={question.id} />
          ))}
        </TabContainer>}
      </div>
		)
	}
}

function mapStateToProps ({ questions, users, authedUser }) {
  const userAnswersIds = Object.keys(users[authedUser].answers)

  return {
    answeredQuestions: Object.values(questions).filter((q) => (userAnswersIds.includes(q.id))),
    unansweredQuestions: Object.values(questions).filter((q) => (!userAnswersIds.includes(q.id)))
  }
}

export default connect(mapStateToProps)(Dashboard)