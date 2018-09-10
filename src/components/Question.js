import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    minWidth: 300,
    marginTop: 20,
  },
  actions: {
    display: 'flex',
    float: 'right'
  },
  avatar: {
    backgroundColor: red[500],
  },
  formAnswerControl: {
  	marginTop: 15
  }
});

class Question extends Component {
	state = {
		answer: null
	}

	handleChange = event => {
    this.setState({ answer: event.target.value });
  }

	render() {
		const { classes, author, optionOne, optionTwo } = this.props;

		return (
			<Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={`${author} says`}
        />
        <CardContent>
          <Typography variant="title">
            Would you rather...
          </Typography>
          <FormControl component="fieldset" className={classes.formAnswerControl}>
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
        <CardActions className={classes.actions}>
          <Button variant="contained" color="primary">
		        Submit
		      </Button>
        </CardActions>
      </Card>
		)
	}
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
};

export default withStyles(styles)(Question)