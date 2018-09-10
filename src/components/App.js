import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Route path='/' exact component={Dashboard} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
