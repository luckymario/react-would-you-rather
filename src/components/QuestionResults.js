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
		const { author, optionOne, optionTwo } = this.props

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
              {optionOne}
            </Typography>
            <LinearProgress variant='determinate' value={66.6} color='secondary' className='answer-votes' />
            <Typography align='center'>
              2 of 3 votes (66.6%)
            </Typography>
          </Paper>
          <Paper className='answer-container'>
            <Typography variant="subheading">
              {optionTwo}
            </Typography>
            <LinearProgress variant='determinate' value={33.3} className='answer-votes' />
            <Typography align='center'>
              1 of 3 votes (33.3%)
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

  return {
    id,
    author,
    optionOne,
    optionTwo
  }
}

export default connect(mapStateToProps)(QuestionResults)