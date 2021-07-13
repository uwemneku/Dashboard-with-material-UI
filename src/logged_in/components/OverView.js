import { Box, Card, Container, Grid, makeStyles, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import React from 'react'
import LottieWrapper from '../../shared/LottieWrapper';
import balance from '../../media/balance.json'
import bonus from '../../media/bonus.json'
import CustomTable from '../../shared/CustomTable';


const useStyles  = makeStyles((theme)=>({
    root:{
        padding: "20px",
        paddingBottom:"200px",
        width:"100%",
        margin:"0px",
        [theme.breakpoints.down("sm")]:{
            padding:"5px"
        }
    }
}))
function OverView() {
    const classes = useStyles()
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid id="see" className={classes.root} 
              container
                  style={{maxWidth:"100%"}}
                  direction="column"
                  spacing={4}
        >
            <Grid item xs={12}>
                <Typography variant={matches_smDown ? "h6": "h5"} >
                    <Box fontWeight={700} color="common.white" >
                        Good Morning, Jane
                    </Box>
                </Typography>
                <Typography variant={matches_smDown ? "body2": "body1"}  >
                    <Box color="text.hint" >
                        Welcome to spiral exchange. This dashboard keeps track of your activities
                    </Box>
                </Typography>
            </Grid>

            <Grid item 
                  xs={12}
                  container
                  style={{maxWidth:"100%", padding:"0px"}}
                  justifyContent="space-between"
                  alignItems="stretch"
                  spacing={4}
            >
                <Grid item xs={12} sm  md>
                    <Container maxWidth="sm">
                        <Paper style={{backgroundColor:"whitesmoke", padding:"10px 20px"}}>
                            <Grid 
                                container
                                alignItems="center"
                                >
                                <Grid item xs>
                                    <LottieWrapper data={balance} loop={false} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={matches_smDown ? "h6": "h5"}>
                                        <Box fontWeight={600} color="primary.main" >
                                            $2,123
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2">
                                        <Box color="text.hint">
                                            Your Private Balance
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </Grid>
                <Grid item xs={12} sm  md>
                    <Container maxWidth="sm" >
                        <Paper  style={{backgroundColor:"whitesmoke", padding:"10px 20px"}}>
                            <Grid 
                                container
                                alignItems="center"
                               
                                >
                                <Grid item xs>
                                    <LottieWrapper data={bonus} height={"59%"} loop={false}  />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={matches_smDown ? "h6": "h5"}>
                                        <Box fontWeight={600}>
                                        $2,123
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2">
                                        Your weekly bonus
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </Grid>
                
            </Grid>
            <Grid  item 
                   xs={12}
                   container
                   style={{paddingTop:50}}
                   
            >   
                <Grid item xs={12}>
                <Typography variant={matches_smDown ? "h6": "h5"} >
                    <Box fontWeight={700} color="common.white"  >
                        Activities
                    </Box>
                </Typography>
                <Typography variant={matches_smDown ? "body2": "body1"}  >
                    <Box color="text.hint" paddingBottom={2} >
                        View all recent activities on your account
                    </Box>
                </Typography>
                </Grid>
                <Grid item xs={12}>
                    <CustomTable />
                </Grid>
            </Grid>

           
        </Grid>
    )
}


export default OverView
