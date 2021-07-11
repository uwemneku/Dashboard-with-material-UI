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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
      marginRight: theme.spacing(0),
    }
  },
  title: {
    flexGrow: 1,
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
       link: "/aboutus",
       name: "About Us",
       icon:"" 
   },
   {
       link: "/contactus",
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

  const handleForm = (formName) => {
    setOpenForm(!openForm)
    formName === "Log In" ?  setShowLoginForm(true) : setShowLoginForm(false)
  
  }

  return (
    <div className={classes.root}>
      <FormDialog 
                  open={openForm} 
                  setOpen={setOpenForm}  
                  formComponent = { showLoginForm ? <Login /> : <SignUp />} 
      />
      <AppBar position="sticky"  color="primary">

        <Toolbar >
          <Box paddingX={1} >
            <Avatar  src={logo} sizes="20" />
          </Box>
          <Typography variant="h6" className={classes.title}>
            <Box color="common.white">
              <span style={{fontWeight:"bolder"}} >Spiral</span>  Exchange
            </Box>
          </Typography>
          <div>
              <Hidden mdUp >
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
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
                                // onClick={element.onClick}
                                key={element.name}
                                classes={{root: element.name === "Sign Up" && classes.largeButton}}
                                onClick = {() => handleForm(element.name)}
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
