import { Box, Button, Container, Divider, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LottieWrapper from '../../shared/LottieWrapper';
import gold from '../../media/gold1.json'
import silver from '../../media/silver.json'
import bronze from '../../media/bronze.json'


const useStyles  = makeStyles((theme)=>({
    root:{
        padding: "20px",
        paddingBottom:"200px",
        height:'100vh',
        width:"100%",
        margin:"0px",
        [theme.breakpoints.down("sm")]:{
            padding:"5px"
        }
    },
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),

      },
}))
const plans = [
    {
        lottieFile: gold,
        name: 'Gold',
        price:'$1,200',
    },
    {
        lottieFile: silver,
        name: 'Silver',
        price:'$1,200',
    },
    {
        lottieFile: bronze,
        name: 'Bronze',
        price:'$1,200',
    },
]
function Investment() {
    const classes = useStyles()
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    // const matchUrl = useRouteMatch
    useEffect(() => {
    }, [])
    return (
        <Grid  className={classes.root} 
              container
                  style={{maxWidth:"100%"}}
                  spacing={4}
        >
            <Grid item xs={12}>
                <Typography variant={matches_smDown ? "h6": "h5"} >
                    <Box fontWeight={700} color="common.white" >
                        Choose an Investment Package
                    </Box>
                </Typography>
                <Typography variant={matches_smDown ? "body2": "body1"}  >
                    <Box color="text.hint" >
                        Invest today, save tomrrow
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={12} container spacing={3}  >
                <Grid item xs={12} sm  md>
                    <InvestmentPlan  name="Gold"
                                     price = "$12000"
                                     lottieComponent={<LottieWrapper height="60%"  data={gold} />}
                    />
                </Grid>
                <Grid item xs={12} sm  md>
                    <InvestmentPlan  name="Silver"
                                     price = "$12000"
                                     lottieComponent={<LottieWrapper height="60%"  data={silver} />}
                    />
                </Grid>
                <Grid item xs={12} conatiner>
                <Grid item xs={12} sm  md>
                    <InvestmentPlan  name="Bronze"
                                     price = "$12000"
                                     lottieComponent={<LottieWrapper height="60%"  data={bronze} />}
                    />
                </Grid>

                </Grid>
            </Grid>
           
        </Grid>
    )
}


function InvestmentPlan({lottieComponent, name, price}){
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    return(
        <Container maxWidth="xs">
                        <Paper>
                            <Box padding={2} textAlign="left">
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        {lottieComponent}
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant={matches_smDown ? "h6": "h5"}>
                                            <Box fontWeight={800}>
                                                {price}
                                            </Box>
                                        </Typography>
                                        <Typography variant={matches_smDown ? "h6": "h5"}>
                                            <Box fontWeight={600}>
                                                {name}
                                            </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Button fullWidth variant="contained" color="primary" size="large" >
                                Select this plan
                            </Button>
                        </Paper>
                    </Container>
    )
}



export default Investment
