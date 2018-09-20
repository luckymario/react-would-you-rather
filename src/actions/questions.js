import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { handleAddUserAnswer } from '../actions/users'
import { handleAddUserQuestion } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

function addQuestion (question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

function addQuestionAnswer (answer) {
	return {
		type: ADD_QUESTION_ANSWER,
		answer
	}
}

export function handleAddQuestion (optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		dispatch(showLoading())

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser
		})
		.then((question) => {
			dispatch(addQuestion(question))
			dispatch(handleAddUserQuestion(question.id))
		})
		.then(() => dispatch(hideLoading()))
	}
}

export function handleAddQuestionAnswer (qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		let info = {
			authedUser,
			qid,
			answer
		}

		dispatch(showLoading())

		return saveQuestionAnswer(info)
			.then(() => {
				dispatch(addQuestionAnswer(info))
				dispatch(handleAddUserAnswer(qid, answer))
			})
			.then(() => dispatch(hideLoading()))
	}
}