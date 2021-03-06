import { Grid, Hidden, Container, Box, makeStyles, Divider } from '@material-ui/core';
import React from 'react'
import NavBar from './components/NavBar'
import Menu from './components/Menu';
import OverView from './components/OverView';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import Profile from './components/Profile';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Withdrawal from './components/withdrawal';
import Investment from './components/Investments';

const useStyles = makeStyles((theme) => ({
    left:{
        
    }
}))

const LoggedInComponent = () => {
    let { path, url } = useRouteMatch();
    return (
        <div style={{height:"100vh", overflow:"hidden", backgroundColor:"#000d13"}} >
            <NavBar />
            <Hidden smUp>
                <Box position="fixed" bottom="0px" >
                    <LabelBottomNavigation />
                </Box>
            </Hidden>
            <Grid container>
                <Grid  item
                    style={{backgroundColor:"#001322"}}
                >
                    <Hidden smDown>
                        <Box  
                            minWidth="250px"
                            paddingY={4}
                            paddingX={2}
                            height="100vh"
                            bgColor="rgb(34, 43, 54)"
                            maxHeight="100vh"  overflow='scroll'
                            
                         >
                            <Menu />
                        </Box>
                    </Hidden>
                </Grid>
                <Divider style={{backgroundColor:"#1e88e5"}} orientation="vertical" flexItem />
                <Grid item xs >
                    <Box id="see" maxHeight="100vh"  overflow='auto' >
                        <Switch>
                            <Route path="/dashboard" component={OverView} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/withdrawal" component={Withdrawal} />
                            <Route path="/investment" component={Investment} />
                        </Switch>
                        
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoggedInComponent;