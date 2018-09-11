import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Question from './Question'
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
			<div style={{width: '80%', maxWidth: '600px', margin: '0 auto'}}>
				<Tabs value={value} onChange={this.handleChange}>
          <Tab label="Unanswered" />
          <Tab label="Answered" />
        </Tabs>

        {value === 0 && <TabContainer>
        	<Question author='Tyler McGinnis' optionOne='find $50 yourself' optionTwo='have your best friend find $500' />
        </TabContainer>}

        {value === 1 && <TabContainer>
        	<Question author='Sarah Edo' optionOne='have horrible short term memory' optionTwo='have horrible long term memory' />
        </TabContainer>}
      </div>
		)
	}
}

export default Dashboard