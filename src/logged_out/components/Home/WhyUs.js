import { Box, Card, CardContent, Grow, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { useViewportSpy } from 'beautiful-react-hooks';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"100vh",
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0px",
        textAlign: "center",
    },
    conatiner:{
        display: "flex",
        flexWrap : "wrap",
        justifyContent : "space-around",
        alignItems: "stretch",
        boxSizing: "border-box"
    },
    card:{
        maxWidth: 275,
        boxSizing: "border-box",
        display: "flex",
        margin: "15px"
        
    },
    content:{
        textAlign: "center",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",

    }
}))
const cardDetails = [
    
    {
        title: "24/7 Support",
        text: "Our support team is always online 24/7 to give you instant response to all your questions and enquiries on our live chat",
        icon: <BeachAccessIcon />
    },
    {
        title: "Globally Recognize",
        text: "No restrictions, we are available in every country worldwide where bitcoin is legal. Anyone can make money with btc investment.",
        icon: <BeachAccessIcon />
    },
    {
        title: "Ensured Profit",
        text: "Investing your bitcoins on virtualfxmarket is always a win-win and return on investment is guaranteed and profitable.",
        icon: <BeachAccessIcon />
    },
    {
        title: "Easy Trading",
        text: "Unlike some other , virtualfxmarket provides 100% user protection and data retention",
        icon: <BeachAccessIcon />
    },
]
export default function WhyUs() {
    const classes = useStyles()
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Box className={classes.root} >
            <Typography variant={matches_smDown ? "h5" : "h4"} >
                <Box fontWeight={600} 
                    color="common.white"
                 >
                    Why choose { }
                    <Box color="primary.main" component="div" bgcolor="common.white" borderRadius={2} padding={1} >
                         Spiral Exchange?
                    </Box>
                </Box>
            </Typography>
            <Box padding={5} paddingX={5} className={classes.conatiner} >
                {
                    cardDetails.map(card => <SimpleCard title={card.title} icon = {card.icon} text={card.text} key={card.text}  /> )
                }
                
            </Box>
        </Box>
    )
}


function SimpleCard({title, icon, text}){
    const classes = useStyles()
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false)
    const hasEnteredScreen = useViewportSpy(ref, {rootMargin: "-100px"});

    useEffect(() => {
        hasEnteredScreen && setIsVisible(true)
    }, [hasEnteredScreen])
 
    return(
        <div>
            <Grow ref={ref} in={isVisible} style={{boxSizing:"border-box"}}  >
              <Card elevation={2} className={classes.card} >
                  <CardContent component="div" className={classes.content}   >
                      <Box component="p" bgcolor ="primary.dark"
                           color="common.white"
                           borderRadius ={10}
                           padding={2} 
                           width="fit-content"
                       >
                        {icon}
                      </Box>
                      <Typography component="div" variant="body1" >
                          <Box component="p" fontWeight={600} paddingY={1} >
                            {title}
                          </Box>
                      </Typography>
                      <Typography component="div" variant ="body1">
                          <Box component="p" color="text.secondary" >
                           {text}
                          </Box>
                      </Typography>
                  </CardContent>
              </Card>
            </Grow>
        </div>
    )
}
