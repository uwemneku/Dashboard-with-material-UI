import { Box, Button, Grid, makeStyles, Typography, useMediaQuery, withStyles } from '@material-ui/core'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { useTheme, } from '@material-ui/core/styles';
import hero from '../../../media/hero.json'
import LottieWrapper from '../../../shared/LottieWrapper';
import { HashLink as Link } from 'react-router-hash-link';



const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:theme.palette.common.white,
        minHeight:"100vh",
        padding: theme.spacing(10),
        paddingTop: "0px",
        
        [theme.breakpoints.down("sm")]:{
            padding: theme.spacing(2),
            paddingTop: "20px",
        
        }
    },
    heading: {
      fontWeight:"bolder",
    },
    images:{
        width:"100%"
    },
    largebutton:{
        paddingLeft: theme.spacing(3)
    }
  }));


  const StyledButton = withStyles((theme)=>({
      root:{
          padding: "8px 40px",
          marginRight: 10,
          [theme.breakpoints.down("sm")]:{
              padding: "8px 20px",
          }
      },
      label:{
          fontWeight: 500
      }
  }))(Button)

export default function HeroSection() {
    const classes = useStyles();
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))

    const _displayTextRenderer = (text, i) => {
        return (
            <Box  color="primary.main" >
                {text}
            </Box>
            )
    }

    return (
            <Grid className={classes.root}
                  container  
                  justifyContent="center" 
                  alignItems="center" 
            >
                <Grid item xs={12} md
                      container
                      direction="column"
                      spacing={2}
                >
                        <Grid item xs>
                            <Typography component="div" variant={matches_smDown ? "h4" : "h3"} 
                                        className={classes.heading} 
                            >
                                <Box component="p"  color="text.primary" > Crypto Trading  Made </Box>
                                <ReactTypingEffect
                                    text={["EASY.", "FLEXIBLE!"]}
                                    typingDelay={500}
                                    eraseDelay={1000}
                                    eraseSpeed={20}
                                    cursorRenderer={cursor => <Box color="primary.main" >{cursor}</Box>}
                                    displayTextRenderer={_displayTextRenderer}
                                />
                            </Typography>
                        </Grid>
                        <Grid item xs >
                            <Typography component="div" variant={matches_smDown ? "body1" : "h6"} >
                                <Box component="p" color="text.primary" >
                                    Investinng in crytocurrencies simplified and made accessible at lightenine spped crypcoin </Box>
                            </Typography>
                        </Grid>
                        <Grid item xs
                        >
                                <StyledButton variant="contained"
                                              color="primary" 
                                              size="large" 
                                >
                                    <Link smooth to="/#pricing">
                                        Get Started
                                    </Link>
                                </StyledButton>
                                <StyledButton variant="outlined" size="large" >
                                    Know More
                                </StyledButton>
                        </Grid>
                    <div>
                    </div>

                </Grid>
                <Grid item xs={12} md

                >
                    {/* <img className={classes.images} src={heroImage} alt="klnkll" /> */}
                    <LottieWrapper data={hero} width="100%" height="100%" />
                </Grid>
            </Grid>
    )
}
