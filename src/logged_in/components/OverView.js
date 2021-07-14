import { Box, Container, Grid, makeStyles, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect } from 'react'
import LottieWrapper from '../../shared/LottieWrapper';
import balance from '../../media/balance.json'
import bonus from '../../media/bonus.json'
import deposit from '../../media/deposit.json'
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
    // const matchUrl = useRouteMatch
    useEffect(() => {
        document.getElementById("chart").innerHTML=`<div style="height:433px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F; padding: 0px; margin: 0px; width: 100%;"><div style="height:413px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes" width="100%" height="409px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>`
        document.getElementById("chart1").innerHTML=`<div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>`
    }, [])
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
                    <CustomCard title="2,123"
                                text="Your Private Balance"
                                lottieComponent={<LottieWrapper data={balance} loop={false} />}
                    />
                </Grid>
                <Grid item xs={12} sm  md>
                    <CustomCard title="2,123"
                                text="Your Private Balance"
                                lottieComponent={<LottieWrapper data={bonus} height={"59%"} loop={false}  />}
                    />
                </Grid>
            </Grid>
            <Grid item 
                  xs={12}
                  container
                  style={{maxWidth:"100%", padding:"0px", paddingTop:"20px"}}
                  justifyContent="space-between"
                  alignItems="stretch"
                  spacing={4}
            >
                <Grid item xs={12} sm  md>
                    <CustomCard title="2,123"
                                text="Your Initial Deposit"
                                lottieComponent={<LottieWrapper height={"59%"} data={deposit} loop={false} />}
                    />
                </Grid>
                <Grid item xs={12} sm  md>
                  
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
                <Grid item xs={12}
                    container
                    direction="column"
                    spacing={0}
                >
                    <Grid item xs={12}>
                     <CustomTable />
                    </Grid>
                    <Grid item xs={12}>
                        <Box paddingY={5} id="chart" />
                    </Grid>
                    <Grid item xs={12}>
                        <Box paddingY={5} id="chart1" />
                    </Grid>
                </Grid>


            </Grid>

           
        </Grid>
    )
}

function CustomCard({title, text, lottieComponent}){
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    return(
        <Container maxWidth="sm" >
                        <Paper  style={{backgroundColor:"white", padding:"10px 20px"}}>
                            <Grid 
                                container
                                alignItems="center"
                               
                                >
                                <Grid item xs>
                                    {lottieComponent}
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={matches_smDown ? "h6": "h5"}>
                                        <Box fontWeight={600}>
                                        ${title}
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2">
                                        {text}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
    )
}


export default OverView
