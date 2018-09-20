import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
	state = {
		optionOneText: '',
		optionTwoText: '',
		toHome: false
	}

	handleChangeOptionOne = (e) => {
		const optionOneText = e.target.value

		this.setState(() => ({
			optionOneText
		}))
	}

	handleChangeOptionTwo = (e) => {
		const optionTwoText = e.target.value

		this.setState(() => ({
			optionTwoText
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()

		const { optionOneText, optionTwoText } = this.state
		const { dispatch } = this.props

		dispatch(handleAddQuestion(optionOneText, optionTwoText))

		this.setState(() => ({
			optionOneText: '',
			optionTwoText: '',
			toHome: true
		}))
	}

	render() {
		const { optionOneText, optionTwoText, toHome } = this.state

		if (toHome === true) {
			return <Redirect to='/' />
		}

		return (
			<div className='new-question-page'>
				<Card>
	        <CardHeader title='Create New Question' align='center' />
	        <CardContent>
	          <Typography variant="subheading">
	            Complete the question
	          </Typography>

	          <h4>Would you rather...</h4>

	          <FormControl className='new-question-form-control'>
							<Input name='optionOneText' placeholder='Enter option one text here' value={optionOneText} onChange={this.handleChangeOptionOne} />
		        </FormControl>
		        <p>OR</p>
		        <FormControl className='new-question-form-control'>
							<Input name='optionTwoText' placeholder='Enter option two text here' value={optionTwoText} onChange={this.handleChangeOptionTwo} />
		        </FormControl>
	        </CardContent>
	        <CardActions className='question-actions'>
	          <Button variant="contained" color="primary" disabled={optionOneText === '' || optionTwoText === ''} onClick={this.handleSubmit}>
			        Submit
			      </Button>
	        </CardActions>
	      </Card>
      </div>
		)
	}
}

export default connect()(NewQuestion)