import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Page404 from './Page404'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading, auth } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          <div className='container'>
            {loading === true
              ? null
              : auth
                ? <Fragment>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/questions/:id' component={QuestionPage} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/404' component={Page404} />
                  </Fragment>
                : <Fragment>
                    <Route path='/' exact component={SignIn} />
                    <Route path='/questions/:id' component={SignIn} />
                    <Route path='/add' component={SignIn} />
                    <Route path='/leaderboard' component={SignIn} />
                    <Route path='/404' component={SignIn} />
                  </Fragment>
                }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    loading: Object.keys(questions).length === null,
    auth: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)