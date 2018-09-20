import { saveQuestionAnswer } from '../utils/api'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

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

function addUserQuestion (question) {
	return {
		type: ADD_USER_QUESTION,
		question
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
	}
}

export function handleAddUserQuestion (qid) {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		dispatch(addUserQuestion({ qid, authedUser }))
	}
}