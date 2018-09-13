import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

class Poll extends Component {
	state = {
		answer: null
	}

	handleChange = event => {
    this.setState({ answer: event.target.value });
  }

	render() {
		const { author, optionOne, optionTwo } = this.props
    const snippet = optionOne.slice(0, 20)

		return (
			<Card className='poll'>
        <CardHeader
          avatar={
            <Avatar aria-label="R" className='question-avatar'>
              R
            </Avatar>
          }
          title={`${author} asks`}
          className='card-header-title'
        />
        <CardContent>
          <Typography variant="subheading">
            {`...${snippet}...`}
          </Typography>
        </CardContent>
        <CardActions className='question-actions'>
          <Button variant="contained" color="primary">
		        View poll
		      </Button>
        </CardActions>
      </Card>
		)
	}
}

Poll.propTypes = {
  author: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired
};

export default Poll