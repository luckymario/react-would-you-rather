import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PollIcon from '@material-ui/icons/Poll';

class Nav extends Component {
  state = {
    anchorMenuEl: null,
    anchorAccountEl: null,
    open: false
  }

  handleAccount = event => {
    this.setState({ anchorAccountEl: event.currentTarget });
  }

  handleAccountClose = () => {
    this.setState({ anchorAccountEl: null });
  }

  handleLogout = () => {
    const { dispatch } = this.props

    dispatch(setAuthedUser(null))

    this.setState({ anchorAccountEl: null });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { auth, users, authedUser } = this.props
    const { anchorAccountEl, open } = this.state
    const openAccount = Boolean(anchorAccountEl)

    const index = users.findIndex(u => u.id === authedUser)
    const user = auth ? users[index] : null

    //console.log(user)

    return (
      <AppBar position="static">
        <Toolbar className='nav'>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={this.handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
          >
            <div className='drawer-header'>
              <IconButton onClick={this.handleDrawerClose} className='drawer-back-btn'>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button selected className='menu-item'>
                <NavLink to='/' exact activeClassName='active'>
                  <ListItemIcon>
                    <QuestionAnswerIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" className='menu-item-text' />
                </NavLink>
              </ListItem>

              <ListItem button className='menu-item'>
                <NavLink to='/add' exact>
                  <ListItemIcon>
                    <PlaylistAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="New Question" className='menu-item-text' />
                </NavLink>
              </ListItem>

              <ListItem button className='menu-item'>
                <NavLink to='/leaderboard' exact>
                  <ListItemIcon>
                    <PollIcon />
                  </ListItemIcon>
                  <ListItemText primary="Leader Board" className='menu-item-text' />
                </NavLink>
              </ListItem>
            </List>
          </Drawer>

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