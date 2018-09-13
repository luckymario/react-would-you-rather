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

class Question extends Component {
	state = {
		answer: null
	}

	handleChange = event => {
    this.setState({ answer: event.target.value });
  }

	render() {
		const { author, optionOne, optionTwo } = this.props

		return (
      <div className='question-page'>
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
  	            <FormControlLabel value="1" control={<Radio />} label={optionOne} />
  	            <FormControlLabel value="2" control={<Radio />} label={optionTwo} />
  	          </RadioGroup>
  	        </FormControl>
          </CardContent>
          <CardActions className='question-actions'>
            <Button variant="contained" color="primary">
  		        Submit
  		      </Button>
          </CardActions>
        </Card>
      </div>
		)
	}
}

function mapStateToProps ({ questions, users }, props) {
  const { id } = props.match.params
  const authorId = questions[id].author
  const author = users[authorId]
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text

  return {
    author,
    optionOne,
    optionTwo
  }
}

export default connect(mapStateToProps)(Question)