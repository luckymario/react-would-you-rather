import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1>Dashboard</h1>
				<Button variant="contained" color="primary">
		      Hello World
		    </Button>
			</div>
		)
	}
}

export default Dashboard