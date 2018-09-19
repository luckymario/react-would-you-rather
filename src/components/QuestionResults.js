import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'

class QuestionResults extends Component {
	render() {
		const { author, optionOne, optionTwo, userAnswer, votes } = this.props

    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const allVotes = optionOneVotes + optionTwoVotes

    const optionOneVotesPer = Math.round(optionOneVotes * 100 / allVotes)
    const optionTwoVotesPer = Math.round(optionTwoVotes * 100 / allVotes)

    const optionOneColor = (userAnswer === 'optionOne') ? 'secondary' : 'primary'
    const optionTwoColor = (userAnswer === 'optionTwo') ? 'secondary' : 'primary'
    const optionOneCheck = (userAnswer === 'optionOne') ? '✔' : ''
    const optionTwoCheck = (userAnswer === 'optionTwo') ? '✔' : ''

    //console.log('Answer: ', userAnswer)

		return (
      <Card>
        <CardHeader
          avatar={
            <Avatar src={author.avatarURL} className='question-avatar' />
          }
          title={`Asked by ${author.name}`}
          className='card-header-title'
        />
        <CardContent>
          <Typography variant="title" paragraph>
            Results
          </Typography>
          <Paper className='answer-container'>
            <Typography variant="subheading">
              {`${optionOne.text} ${optionOneCheck}`}
            </Typography>
            <div className='answer-results'>
              <LinearProgress variant='determinate' value={optionOneVotesPer} color={optionOneColor} className='answer-votes' />
              <Typography className='answer-label'>
                {`${optionOneVotes} of ${allVotes} (${optionOneVotesPer}%)`}
              </Typography>
            </div>
          </Paper>
          <Paper className='answer-container'>
            <Typography variant="subheading">
             {`${optionTwo.text} ${optionTwoCheck}`}
            </Typography>
            <div className='answer-results'>
              <LinearProgress variant='determinate' value={optionTwoVotesPer} color={optionTwoColor} className='answer-votes' />
              <Typography className='answer-label'>
                {`${optionTwoVotes} of ${allVotes} (${optionTwoVotesPer}%)`}
              </Typography>
            </div>
          </Paper>
        </CardContent>
      </Card>
		)
	}
}

function mapStateToProps ({ questions, users, authedUser }, props) {
  const { id } = props
  const authorId = questions[id].author
  const author = users[authorId]
  const optionOne = questions[id].optionOne
  const optionTwo = questions[id].optionTwo
  const userAnswer = users[authedUser].answers[id]

  /*
  johndoe: {
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
  }*/

  let votes = []

  Object.values(users).forEach((u) =>
    Object.entries(u.answers).forEach((a) => {
      if (a[0] === id) {
        votes.push(a[1])
      }
    })
  )

  return {
    id,
    author,
    optionOne,
    optionTwo,
    userAnswer
  }
}

export default connect(mapStateToProps)(QuestionResults)