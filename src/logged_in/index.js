import { Grid, Hidden, Container, Box, makeStyles, Divider } from '@material-ui/core';
import React from 'react'
import NavBar from './components/NavBar'
import Menu from './components/Menu';
import OverView from './components/OverView';
import LabelBottomNavigation from './components/LabelBottomNavigation';

const useStyles = makeStyles((theme) => ({
    left:{
        
    }
}))

const LoggedInComponent = () => {
    return (
        <div style={{height:"100vh", overflow:"hidden"}} >
            <NavBar />
            <Box position="fixed" bottom="0px" >
                <LabelBottomNavigation />
            </Box>
            <Grid container>
                <Grid  item>
                    <Hidden mdDown>
                        <Box  
                            minWidth="250px"
                            paddingY={4}
                            paddingX={2}
                            height="100vh"
                         >
                            <Menu />
                        </Box>
                    </Hidden>
                </Grid>
                <Divider color="" orientation="vertical" flexItem />
                <Grid item xs >
                    <Box id="see" maxHeight="100vh"  overflow='scroll' >
                        <OverView />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoggedInComponent;