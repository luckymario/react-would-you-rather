import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'

function OptionContainer(props) {
  return (
    <Paper className='answer-container'>
      <Typography variant="subheading">
        {`${props.data.text} ${props.data.check}`}
      </Typography>
      <div className='answer-results'>
        <LinearProgress variant='determinate' value={props.data.votesPer} color={props.data.color} className='answer-votes' />
        <Typography className='answer-label'>
          {`${props.data.votes} of ${props.data.allVotes} (${props.data.votesPer}%)`}
        </Typography>
      </div>
    </Paper>
  )
}

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

    const optionOneData = {
      text: optionOne.text,
      votes: optionOneVotes,
      votesPer: optionOneVotesPer,
      allVotes: allVotes,
      color: optionOneColor,
      check: optionOneCheck
    }

    const optionTwoData = {
      text: optionTwo.text,
      votes: optionTwoVotes,
      votesPer: optionTwoVotesPer,
      allVotes: allVotes,
      color: optionTwoColor,
      check: optionTwoCheck
    }

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
          <OptionContainer data={optionOneData} />
          <OptionContainer data={optionTwoData} />
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

  return {
    id,
    author,
    optionOne,
    optionTwo,
    userAnswer
  }
}

export default connect(mapStateToProps)(QuestionResults)