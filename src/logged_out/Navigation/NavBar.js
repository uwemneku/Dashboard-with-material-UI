import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from "@material-ui/core/Hidden"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Avatar, Box } from '@material-ui/core';
import FormDialog from '../../shared/FormDailog';
import logo from '../../media/logo.png'
import Login from '../components/Home/Login';
import SignUp from '../components/Home/SignUp';
import NavigationDrawer from '../../shared/NavigationDrawer';
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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



const menuItems = [ 
   {
       link: "/",
       name: "Home",
       icon:"" 
   },
   {
       link: "#aboutus",
       name: "About Us",
       icon:"" 
   },
   {
       link: "#contactus",
       name: "Contact Us",
       icon:"" 
   },
   {
       name: "Log In",
       icon:"" ,
       onClick: ""
   },
   {
       name: "Sign Up",
       icon:"" ,
       onClick:""
   },
]

export default function NavBar() {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const history = useHistory()

  const handleForm = (formName) => {
    setOpenForm(!openForm)
    formName === "Log In" ?  setShowLoginForm(true) : setShowLoginForm(false)
  
  }

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <div className={classes.root}>
      <FormDialog 
                  open={openForm} 
                  setOpen={setOpenForm}  
                  formComponent = { showLoginForm ? <Login /> : <SignUp />} 
                  title = { showLoginForm ? "Log In":  "Sign Up" }
      />
        <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={openDrawer}
        // selectedItem={selectedTab}
        onClose={handleDrawer}
      />
      <AppBar position="sticky"  color="primary">

        <Toolbar >
          <Box paddingX={1} >
            <Avatar  src={logo} className={classes.avatar}/>
          </Box>
          <Typography  className={classes.title}>
            <Box color="common.white">
              <span style={{fontWeight:"bolder"}} >Spiral</span>  Exchange
            </Box>
          </Typography>
          <div>
              <Hidden mdUp >
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawer} >
                    <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden smDown >
                {
                    menuItems.map(element => {
                        if(element.link){
                            return(
                                <Link 
                                    key={element.name}
                                    to={element.link}
                                >
                                    <Button 
                                        color="text.primary"
                                        size="large"
                                        className={classes.menuButton}
                                    >   
                                      <Box  color="common.white" >
                                          {element.name}
                                      </Box>
                                    </Button>
                                </Link>
                            )
                        }
                        return(
                            <Button
                                color="secondary" 
                                size="large"
                                className={classes.menuButton}
                                variant={element.name === "Sign Up" ? "contained" : "text"}
                                key={element.name}
                                classes={{root: element.name === "Sign Up" && classes.largeButton}}
                                onClick = {() => element.name === "Sign Up" ? history.replace("/register") : history.replace("/login")}
                            >
                              <Box  color="common.white" >
                                        {element.name}
                              </Box>
                            </Button>
                        )
                    })
                }
              </Hidden>
          </div>
        </Toolbar>
      
      </AppBar>
    </div>
  );
}
