import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS :
			return {
				...state,
				...action.questions
			}

		case SAVE_ANSWER :
			return {
				...state,
				[action.authedUser]: {
          ...action.users[action.authedUser],
          answers: {
            ...action.users[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
			}

		case ADD_QUESTION :
			const { question } = action

			let replyingTo = {}
			if (question.replyingTo !== null) {
				replyingTo = {
					[question.replyingTo]: {
						...state[question.replyingTo],
						replies: state[question.replyingTo].replies.concat([question.id])
					}
				}
			}

			return {
				...state,
				[action.question.id]: action.question,
				...replyingTo
			}
		default:
			return state
	}
}