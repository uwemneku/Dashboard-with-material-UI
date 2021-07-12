import React, { useEffect, useRef, useState } from 'react'
import { Box, Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import Lottie from 'react-lottie';
import gold from '../../../media/gold1.json'
import silver from '../../../media/silver.json'
import bronze from '../../../media/bronze.json'
import { Button } from '@material-ui/core';
import { useViewportSpy } from 'beautiful-react-hooks';
import { Zoom } from '@material-ui/core';
import LottieWrapper from '../../../shared/LottieWrapper';

function Pricing() {
    return (
        <Box minHeight="100vh" 
            display="flex" 
            alignItems="center" 
            justifyContent="space-around"
            flexWrap="wrap"
            bgcolor="primary.dark"
            paddingY={15}
            id="pricing"
         >
             <Box 
                 width="100vw"
                 textAlign="center"
                 fontWeight={600}
                 color="common.white"
                 paddingY={5}
             >
                 <Typography variant="h4">
                     Our Invesment Packages
                 </Typography>
             </Box>
            <PricingCard animationData={gold} name="Gold" price="4,000" />
            <PricingCard animationData={silver} name="Silver" price="1,600" />
            <PricingCard animationData={bronze} name="Bronze" price="1,000" />
        </Box>
    )
}

const useStyles = makeStyles((theme)=>({
    root:{
        padding: "30px 20px",
        '& li':{
            padding: "5px",
            fontSize: "16px",
            fontWeight: 500,
            color: theme.palette.text.secondary
        },
        '& ul':{
            padding: "20px 0px"
        },
        '& button':{
            padding:"10px",
            margin: "20px 0px"
        }
    }
}))
function PricingCard({animationData, name, price}){
    const classes=useStyles()
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false)
    const hasEnteredScreen = useViewportSpy(ref, {rootMargin: "-100px"});

    useEffect(() => {
        hasEnteredScreen && setIsVisible(true)
    }, [hasEnteredScreen])
 
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <Zoom ref={ref} in={isVisible} style={{boxSizing:"border-box"}}  >
        <Box ref={ref} maxWidth="300px" margin="10px" >
            <Paper elevation={2} color="primary" className={classes.root} >
            <LottieWrapper data={animationData} height={150} width={150} />
            <Box
                textAlign="center"
            >
                <Typography variant="h5" >
                    <Box fontWeight={600} >
                        ${price}
                    </Box>
                </Typography>
                <Typography variant="h6" >
                    <Box fontWeight={600} >
                        {name}
                    </Box>
                </Typography>
                <Divider variant="fullWidth" />
                <ul>
                    <li>Capital will return back</li>
                    <li>24/7 Support</li>
                    <li>5,500 Support</li>
                    <li>Unlimited Trading Signal</li>
                    <li>7 Withdraw Request per week</li>
                    <li>Free support</li>
                </ul>
                <Divider variant="fullWidth" />
                <Button variant="contained" color="primary" >
                    Choose this Plan
                </Button>
            </Box>
            
            </Paper>
        </Box>
        </Zoom>
    )
}

export default Pricing
