import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { HashLink as Link } from 'react-router-hash-link';
import { Avatar, Box, Divider, Hidden } from '@material-ui/core';
import logo from '../../media/logo.png'
import {useHistory} from 'react-router-dom'
import avatar from '../../media/avatar.jpg'
import UserAvar from '../../shared/UserAvar';
// import {useHistory} from 'react-router-dom'
// import IconButton  from '@material-ui/core/IconButton';
// import  MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    borderStyle:"block",
    borderWidth: 2,
    borderColor: "white",
    top:0,
    zIndex: 10
  },
  avatar:{
    width: 30,
    height: 30,
    [theme.breakpoints.down("sm")]:{
      width: 20,
      height: 20,

    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
      marginRight: theme.spacing(0),
    }
  },
  title: {
    flexGrow: 1,
    fontSize: theme.typography.h6,
    [theme.breakpoints.down("sm")]:{
      fontSize: theme.typography.body1,
    }
  },
  largeButton:{
    padding: "5px 30px"
  }
}));



export default function NavBar() {
  const classes = useStyles();
  const history = useHistory()


  

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{backgroundColor:"#001322"}} >
        <Toolbar >
          <Box paddingX={1} >
            <Avatar   src={logo} className={classes.avatar}/>
          </Box>
          <Typography  className={classes.title}>
            <Box color="common.white">
              <span style={{fontWeight:"bolder"}} >Spiral</span>  Exchange
            </Box>
          </Typography>
          
          <div>
            <UserAvar dimension={40} />
          </div>
        </Toolbar>
      
      </AppBar>
        <Divider color="primary" variant="fullWidth" style={{backgroundColor:"#1e88e5", padding:"0.3px"}} orientation="horizontal" flexItem />
    </div>
  );
}
