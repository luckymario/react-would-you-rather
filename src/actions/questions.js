import { saveQuestion } from '../utils/api'
import { saveQuestionAnswer } from '../utils/api'
//import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'


function addQuestion (question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

export function handleAddQuestion (text, replyingTo) {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		//dispatch(showLoading())

		return saveQuestion({
			text,
			author: authedUser,
			replyingTo
		})
		.then((question) => dispatch(addQuestion(question)))
		//.then(() => dispatch(hideLoading()))
	}
}

function saveAnswer ({ authedUser, qid, answer }) {
	return {
		type: SAVE_ANSWER,
		authedUser,
		qid,
		answer
	}
}

export function handleSaveQuestionAnswer (info) {
	return (dispatch) => {
		dispatch(saveAnswer(info))

		return saveQuestionAnswer(info)
			.catch((e) => {
				console.warn('Error in handleSaveQuestionAnswer: ', e)
				dispatch(saveAnswer(info))
				alert('There was an error saving question answer. Try again.')
			})
	}
}

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}