import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'

class NewQuestion extends Component {
	render() {
		return (
			<Card>
        <CardHeader title='Create New Question' />
        <CardContent>
          <Typography variant="subheading">
            Complete the questions
          </Typography>

          <h4>Would you rather?</h4>

          <FormControl>
						<Input name='optionTwo' placeholder='Write question 2' />
	        </FormControl>
	        <p>OR</p>
	        <FormControl>
						<Input name='optionTwo' placeholder='Write question 2' />
	        </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
		        Submit
		      </Button>
        </CardActions>
      </Card>
		)
	}
}

export default NewQuestion