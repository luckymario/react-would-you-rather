import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Badge from '@material-ui/core/Badge'

function UserContainer(props) {
	const { user } = props
  return (
    <Paper className='user-container'>
      <div className='user-avatar'>
        <Avatar src={user.avatarURL} />
      </div>
      <div className='user-data'>
      	<h4>{user.name}</h4>
      	<p>Answered questions: <span>7</span></p>
      	<p>Created questions: <span>3</span></p>
      </div>
      <div className='user-score'>
      	<h4>Score</h4>
      	<span className='user-badge'>10</span>
      </div>
    </Paper>
  )
}

class LeaderBoard extends Component {
	render() {
		const { users } = this.props

		return (
			<div className='leaderboard-container'>
				<Typography variant="title" align="center">
          Leader Board
        </Typography>
				{users.map((user) => (
          <UserContainer key={user.id} user={user} />
        ))}
			</div>
		)
	}
}

function mapStateToProps ({ questions, users, authedUser }) {
  //const userAnswersIds = Object.keys(users[authedUser].answers)
  //const sortedQuestions = Object.values(questions).sort((a,b) => b.timestamp - a.timestamp)

  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(LeaderBoard)