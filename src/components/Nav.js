import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

class Nav extends Component {
  state = {
    auth: true,
    anchorMenuEl: null,
    anchorAccountEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorMenuEl: event.currentTarget });
  };

  handleAccount = event => {
    this.setState({ anchorAccountEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorMenuEl: null });
  };

  handleAccountClose = () => {
    this.setState({ anchorAccountEl: null });
  };

  render() {
    //const { classes } = this.props;
    const { auth, anchorMenuEl, anchorAccountEl } = this.state;
    const openMenu = Boolean(anchorMenuEl);
    const openAccount = Boolean(anchorAccountEl);

    return (
      <AppBar position="static">
        <Toolbar>
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
            transformOrigin={{  vertical: 'top', horizontal: 'left',}}
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
              <NavLink to='/leader-board' exact>
                Leader Board
              </NavLink>
            </MenuItem>
          </Menu>

          <Typography variant="title" color="inherit">
            Would you rather?
          </Typography>

          {auth && (
            <div>
              <IconButton
                aria-owns={openAccount ? 'menu-account' : null}
                aria-haspopup="true"
                onClick={this.handleAccount}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-account"
                anchorEl={anchorAccountEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
                transformOrigin={{  vertical: 'top', horizontal: 'right',}}
                open={openAccount}
                onClose={this.handleAccountClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>

        {/* <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/new' activeClassName='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leader-board' activeClassName='active'>
                LeaderBoard
              </NavLink>
            </li>
          </ul>
        </nav> */}
      </AppBar>
    )
  }

}

export default Nav