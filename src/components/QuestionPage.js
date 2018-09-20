import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import QuestionResults from './QuestionResults'
import QuestionPoll from './QuestionPoll'

class QuestionPage extends Component {
	render() {
		const { id, isAnswered, questionExists } = this.props

    if (questionExists === false) {
      return <Redirect to='/404' />
    }

		return (
      <div className='question-page'>
        {isAnswered
          ? <QuestionResults id={id} />
          : <QuestionPoll id={id} />}
      </div>
		)
	}
}

function mapStateToProps ({ questions, users, authedUser }, props) {
  const { id } = props.match.params
  const userAnswersIds = Object.keys(users[authedUser].answers)
  const isAnswered = userAnswersIds.includes(id)

  return {
    id,
    isAnswered,
    questionExists: Object.keys(questions).includes(id)
  }
}

export default connect(mapStateToProps)(QuestionPage)