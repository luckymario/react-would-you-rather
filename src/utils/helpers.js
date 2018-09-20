export function formatUser (user) {
  const { id, name, avatarURL, answers, questions } = user
  const answeredQuestions = Object.keys(answers).length ? Object.keys(answers).length : 0
  const createdQuestions = questions.length ? questions.length : 0
  const score = answeredQuestions + createdQuestions

  return {
    id,
    name,
    avatarURL,
    answeredQuestions,
    createdQuestions,
    score
  }
}