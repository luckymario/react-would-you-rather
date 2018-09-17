import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

import { handleSaveQuestionAnswer } from '../actions/questions'

class QuestionPoll extends Component {
	state = {
		answer: null
	}

	handleChange = event => {
    this.setState({ answer: event.target.value });
  }

  handleVote = (e) => {
    e.preventDefault()

    const { id, dispatch, authedUser } = this.props
    const { answer } = this.state

    //console.log('Vote: ', this.state.answer)

    dispatch(handleSaveQuestionAnswer({
      authedUser: authedUser,
      id: id,
      answer: answer
    }))
  }

	render() {
		const { author, optionOne, optionTwo } = this.props

		return (
      <Card>
        <CardHeader
          avatar={
            <Avatar src={author.avatarURL} className='question-avatar' />
          }
          title={`${author.name} asks`}
        />
        <CardContent>
          <Typography variant="title">
            Would you rather...
          </Typography>
          <FormControl component="fieldset" className='question-form-control'>
            <RadioGroup
              aria-label="Answer"
              name="answer"
              value={this.state.answer}
              onChange={this.handleChange}
            >
              <FormControlLabel value="optionOne" control={<Radio />} label={optionOne} />
              <FormControlLabel value="optionTwo" control={<Radio />} label={optionTwo} />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions className='question-actions'>
          <Button variant="contained" color="primary" onClick={this.handleVote}>
            Submit
          </Button>
        </CardActions>
      </Card>
		)
	}
}

function mapStateToProps ({ questions, users, authedUser }, props) {
  const { id } = props
  const authorId = questions[id].author
  const author = users[authorId]
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text

  return {
    id,
    authedUser,
    author,
    optionOne,
    optionTwo
  }
}

export default connect(mapStateToProps)(QuestionPoll)