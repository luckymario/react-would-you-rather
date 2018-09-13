import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import Question from './Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <div className='container'>
            {this.props.auth
                ? <Fragment>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/question/:id' component={Question} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                  </Fragment>
                : <Fragment>
                    <Route path='/' exact component={SignIn} />
                    <Route path='/question/:id' component={SignIn} />
                    <Route path='/add' component={SignIn} />
                    <Route path='/leaderboard' component={SignIn} />
                  </Fragment>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    auth: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)