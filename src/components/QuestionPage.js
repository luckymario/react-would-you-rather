import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResults from './QuestionResults'
import QuestionPoll from './QuestionPoll'

class QuestionPage extends Component {
	render() {
		const { id, isAnswered } = this.props

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
    isAnswered
  }
}

export default connect(mapStateToProps)(QuestionPage)