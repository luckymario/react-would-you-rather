import { saveQuestionAnswer } from '../utils/api'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

export function receiveUsers (users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}

function addUserAnswer (answer) {
	return {
		type: ADD_USER_ANSWER,
		answer
	}
}

export function handleAddUserAnswer (qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		let info = {
			authedUser,
			qid,
			answer
		}

		dispatch(addUserAnswer(info))

		return saveQuestionAnswer(info)
		//.then(() => dispatch(hideLoading()))
	}
}