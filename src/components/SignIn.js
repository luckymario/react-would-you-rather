import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

import logo from '../logo.svg'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from '@material-ui/core/Avatar'

class SignIn extends Component {
	state = {
    userId: '',
  }

  handleChange = e => {
  	const userId = e.target.value
  	const { dispatch } = this.props

  	dispatch(setAuthedUser(userId))

  	this.setState(() => ({
			userId
		}))

    //console.log(this.state.userId)
  };

	render() {
		return (
			<div className='sign-in-page'>
				<Card>
	        <CardHeader title="Welcome to Would You Rather App"/>
	        <CardContent>
	          <Typography variant="title" align='center'>
	          	<img src={logo} className="App-logo" alt="logo" />
	            Sign In
	          </Typography>
	          <FormControl component="fieldset" className='sign-in-form'>
	          	<Select
		            value={this.state.userId}
		            onChange={this.handleChange}
		            displayEmpty
		            name="userId"
		            className='select-user'
		          >
		            <MenuItem value="">
		              <em>choose user</em>
		            </MenuItem>
		            {this.props.users.map((user) => (
									<MenuItem key={user.id} value={user.id}>
										<Avatar alt={user.name} src={user.avatarURL} className='sign-in-avatar-item' />
										{user.name}
									</MenuItem>
								))}
		          </Select>
		        </FormControl>
	        </CardContent>
	      </Card>
      </div>
		)
	}
}

function mapStateToProps ({ users }) {
	return {
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(SignIn)