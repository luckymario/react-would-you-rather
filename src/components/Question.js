import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Question extends Component {
	state = {
		answer: null
	}

	handleChange = event => {
    this.setState({ answer: event.target.value });
  }

	render() {
		const { id, author, optionOne } = this.props
    const snippet = optionOne.slice(0, 20)

		return (
			<Card className='question'>
        <CardHeader
          avatar={
            <Avatar src={author.avatarURL} className='question-avatar' />
          }
          title={`${author.name} asks`}
          className='card-header-title'
        />
        <CardContent>
          <Typography variant="subheading">
            {`...${snippet}...`}
          </Typography>
        </CardContent>
        <CardActions className='question-actions'>
          <Link to={`/questions/${id}`}>
            <Button variant="contained" color="primary">
  		        View poll
  		      </Button>
          </Link>
        </CardActions>
      </Card>
		)
	}
}

function mapStateToProps ({ questions, users }, { id }) {
  const authorId = questions[id].author
  const author = users[authorId]
  const optionOne = questions[id].optionOne.text

  return {
    id,
    author,
    optionOne
  }
}

export default connect(mapStateToProps)(Question)