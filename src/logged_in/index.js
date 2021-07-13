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
        <div style={{height:"100vh", overflow:"hidden", backgroundColor:"rgb(23, 28, 36)"}} >
            <NavBar />
            <Hidden smUp>
                <Box position="fixed" bottom="0px" >
                    <LabelBottomNavigation />
                </Box>
            </Hidden>
            <Grid container>
                <Grid  item
                    style={{backgroundColor:"rgb(34, 43, 54)"}}
                >
                    <Hidden smDown>
                        <Box  
                            minWidth="250px"
                            paddingY={4}
                            paddingX={2}
                            height="100vh"
                            bgColor="rgb(34, 43, 54)"
                            
                         >
                            <Menu />
                        </Box>
                    </Hidden>
                </Grid>
                <Divider style={{backgroundColor:"gray"}} orientation="vertical" flexItem />
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