import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
	render() {
		return (
			<div style={{width: '50%', maxWidth: '600px', margin: '0 auto'}}>
	      <Question author='Tyler McGinnis' optionOne='find $50 yourself' optionTwo='have your best friend fintd $500' />
	      <Question author='Sarah Edo' optionOne='have horrible short term memory' optionTwo='have horrible long term memory' />
      </div>
		)
	}
}

export default Dashboard