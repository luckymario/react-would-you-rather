import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'

class Nav extends Component {
  state = {
    anchorMenuEl: null,
    anchorAccountEl: null,
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  }

  handleMenu = event => {
    this.setState({ anchorMenuEl: event.currentTarget });
  }

  handleAccount = event => {
    this.setState({ anchorAccountEl: event.currentTarget });
  }

  handleMenuClose = () => {
    this.setState({ anchorMenuEl: null });
  }

  handleAccountClose = () => {
    this.setState({ anchorAccountEl: null });
  }

  handleLogout = () => {
    const { dispatch } = this.props

    dispatch(setAuthedUser(null))

    this.setState({ anchorAccountEl: null });
  }

  render() {
    const { auth, users, authedUser } = this.props
    const { anchorMenuEl, anchorAccountEl } = this.state
    const openMenu = Boolean(anchorMenuEl)
    const openAccount = Boolean(anchorAccountEl)

    const index = users.findIndex(u => u.id == authedUser)
    const user = auth ? users[index] : null

    //console.log(user)

    return (
      <AppBar position="static">
        <Toolbar className='nav'>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={this.handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-main"
            anchorEl={anchorMenuEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'left',}}
            transformOrigin={{ vertical: 'top', horizontal: 'left',}}
            open={openMenu}
            onClose={this.handleMenuClose}
          >
            <MenuItem>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='/add' exact activeClassName='active'>
                New Question
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='/leaderboard' exact activeClassName='active'>
                Leader Board
              </NavLink>
            </MenuItem>
          </Menu>

          <Typography variant="title" color="inherit" className='nav-name'>
            Would you rather?
          </Typography>

          {auth && (<div className='nav-user'>
                <span>Hello, {user.name}</span>
                <Avatar
                  alt={user.name}
                  src={user.avatarURL}
                  onClick={this.handleAccount}
                  className='nav-avatar'
                />
                <Menu
                  id="menu-account"
                  anchorEl={anchorAccountEl}
                  open={openAccount}
                  onClose={this.handleAccountClose}
                >
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </div>)}
        </Toolbar>
      </AppBar>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    auth: authedUser !== null,
    authedUser: authedUser,
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Nav)