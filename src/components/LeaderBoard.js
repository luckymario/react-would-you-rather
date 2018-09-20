import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser } from '../utils/helpers'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

function UserContainer(props) {
	const { user } = props
  return (
    <Paper className='user-container'>
      <div className='user-avatar'>
        <Avatar src={user.avatarURL} />
      </div>
      <div className='user-data'>
      	<h4>{user.name}</h4>
      	<p>Answered questions: <span>{user.answeredQuestions}</span></p>
      	<p>Created questions: <span>{user.createdQuestions}</span></p>
      </div>
      <div className='user-score'>
      	<h4>Score</h4>
      	<span className='user-badge'>{user.score}</span>
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
  const formattedUsers = Object.values(users).map((user) => formatUser(user))
  const sortedUsers = formattedUsers.sort((a,b) => b.score - a.score)

  return {
    users: sortedUsers
  }
}

export default connect(mapStateToProps)(LeaderBoard)