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
		const { author, optionOne, optionTwo, votes } = this.props

    const allVotes = votes.length
    const optionOneVotes = votes.filter((v) => v === 'optionOne').length
    const optionOneVotesPer = Math.round(optionOneVotes * 100 / allVotes)
    const optionTwoVotes = votes.filter((v) => v === 'optionTwo').length
    const optionTwoVotesPer = Math.round(optionTwoVotes * 100 / allVotes)

    console.log('Votes: ', votes.filter((v) => v === 'optionTwo').length)

		return (
      <Card>
        <CardHeader
          avatar={
            <Avatar src={author.avatarURL} className='question-avatar' />
          }
          title={`Asked by ${author.name}`}
        />
        <CardContent>
          <Typography variant="title" paragraph>
            Results:
          </Typography>
          <Paper className='answer-container'>
            <Typography variant="subheading">
              {`${optionOne} ✔`}
            </Typography>
            <LinearProgress variant='determinate' value={optionOneVotesPer} color='secondary' className='answer-votes' />
            <Typography align='center'>
              {`${optionOneVotes} of ${allVotes} (${optionOneVotesPer}%)`}
            </Typography>
          </Paper>
          <Paper className='answer-container'>
            <Typography variant="subheading">
             {`${optionTwo}`}
            </Typography>
            <LinearProgress variant='determinate' value={optionTwoVotesPer} className='answer-votes' />
            <Typography align='center'>
              {`${optionTwoVotes} of ${allVotes} (${optionTwoVotesPer}%)`}
            </Typography>
          </Paper>
        </CardContent>
      </Card>
		)
	}
}

function mapStateToProps ({ questions, users }, props) {
  const { id } = props
  const authorId = questions[id].author
  const author = users[authorId]
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text

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
    votes
  }
}

export default connect(mapStateToProps)(QuestionResults)