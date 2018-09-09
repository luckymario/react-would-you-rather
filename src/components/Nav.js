import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import MenuIcon from 'material-ui/IconMenu';
//import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
//import Menu from '@material-ui/core/Menu';

class Nav extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>

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