import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS :
			return {
				...state,
				...action.questions
			}

		/*case TOGGLE_TWEET :
			// data: _saveLikeToggle ({ id, hasLiked, authedUser })
			tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes: hasLiked === true
            ? tweets[id].likes.filter((uid) => uid !== authedUser)
            : tweets[id].likes.concat([authedUser])
        }
      }

			// reducer
			return {
				...state,
				[action.id]: {
					...state[action.id],
					likes: action.hasLiked === true
						? state[action.id].likes.filter((uid) => uid !== action.authedUser)
						: state[action.id].likes.concat([action.authedUser])
				}
			}	*/

		case SAVE_ANSWER :
			/*_saveQuestionAnswer ({ authedUser, qid, answer }):
			users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      } */

			return {
				/*...state,
				[action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }*/
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
			}

		case ADD_QUESTION :
			const { question } = action

			return {
				...state,
				[action.question.id]: action.question
			}

		default:
			return state
	}
}