import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Poll from './Poll'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Dashboard extends Component {
	state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

	render() {
		const { value } = this.state

		return (
			<div className='questions-container'>
				<Tabs value={value} onChange={this.handleChange}>
          <Tab label="Unanswered questions" />
          <Tab label="Answered questions" />
        </Tabs>

        {value === 0 && <TabContainer>
          <Poll author='Tyler McGinnis' optionOne='find $50 yourself' />
        	<Poll author='Sarah Edo' optionOne='have horrible short term memory' />
        </TabContainer>}

        {value === 1 && <TabContainer>
        	<Poll author='Sarah Edo' optionOne='have horrible short term memory' />
        </TabContainer>}
      </div>
		)
	}
}

export default Dashboard