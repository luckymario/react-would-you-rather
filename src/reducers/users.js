import { RECEIVE_USERS, ADD_USER_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS :
			return {
				...state,
				...action.users
			}

		case ADD_USER_ANSWER :
			const { answer } = action

			return {
				...state,
				[answer.authedUser]: {
          ...state[answer.authedUser],
          answers: {
            ...state[answer.authedUser].answers,
            [answer.qid]: answer.answer
          }
        }
			}

		default:
			return state
	}
}