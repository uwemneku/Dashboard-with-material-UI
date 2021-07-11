import React, { useEffect, useRef, useState } from 'react';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Slide, Typography } from '@material-ui/core';
import { useViewportSpy } from 'beautiful-react-hooks';
import image from '../../../media/hero_l.jpg'


const FAQdetails = [
    {
        title:"Why should I Trust This Platform?",
        text: "Firstly, only a trusted organization can have a physical office (39 White Lion Street, London, United Kingdom, N1 9PH) and a verified business registration Of Private Limited Company in the UK. Above that, we have gone beyond necessary to provide real-time recent transactions and payments to investors as seen above. Nevertheless, we have also provided video testimonials of some previous investors, you can check our reviews page for more information. All in all, this is a legit bitcoin doubler site and you will never regret any chance taken."
    },
    {
        title:"How Do I Invest?",
        text: "Simply create an account. Make a bitcoin deposit of the amount you want to invest with, then select any of our investment plans. Wait for the specified time to get your returns. ROI are automatically credited to your wallet and withdrawal is instant."
    },
    {
        title: "What Payment Method Is Acceptable With Virtualfxmarket?",
        text: "We accept only Bitcoin(BTC) Litecoins(LTC) Ethereum (ETH) cryptocurrency. If you are interested in other currencies, we will add them later in the future."
    },
    {
        title: "How Do I Contact Virtualfxmarket?",
        text: "We are available 24/7 on live chat. You can initiate a live chat at the bottom-right part of the screen. Also, you can send us a mail to info@virtualfxmarket.online, we will respond as soon as possible."
    },
    {
        title: "I Don't Have BITCOIN, What Do I Do?",
        text: "Unfortunately, the only way to invest on this platform is with bitcoins. So you can consult local bitcoin sellers in your country or buy bitcoins online with your credit or debit card. If you need help with this, you can contact us for suggestions."
    },
    {
        title: "How Do I Withdraw My Interest?",
        text: "Withdrawal is simple. Go to the withdrawal page, enter your bitcoin wallet address and submit. You will get the withdrawn bitcoins in your bitcoin wallet within 30 minutes. On here, you can easily double bitcoins legit in 2019"
    },
    {
        title: "Can I Re-Invest From Interest Wallet?",
        text: "Yes, you can make subsequent investments from your interest wallet."
    },
]

export default function AboutUs() {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const hasEnteredScreen = useViewportSpy(ref, {rootMargin: "-100px"});

    useEffect(() => {
        hasEnteredScreen && setIsVisible(true)
    }, [hasEnteredScreen])
   
  return (
      <Box
        padding = "30px 20px"
        ref={ref}
        minHeight="100vh"
      >
          <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item md xs={12}>
                <FAQ slideIn ={isVisible} /> 
              </Grid>
              <Grid item md xs={12}>
                  <Test slideIn ={isVisible} />
              </Grid>
          </Grid>
       
       </Box>
 );
}
// ccordion square  >
const Test =({slideIn})=>{
    return(
        <Slide  direction="left" in={slideIn} mountOnEnter  >

        <Container maxWidth="md">
            <Typography variant="h4" color="primary">
                <Box fontWeight={600}>
                    About Us
                </Box>
            </Typography>
            <Grid container>
                <Grid item style={{maxHeight : 200, overflow:"hidden"}}  >
                   { slideIn && <img src={image} alt={"jhbhb"} style={{width : "100%"}} />}
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" >
                        virtualfxmarket INC is a fully certified and licensed company under the name Bitcoin Explore Limited with Company number 11188393. Established in 2017 first as a cloud mining provider and listed as one of the best sites to double bitcoins in 2018, we have now become a fully functional and trusted cryptocurrency investment company, verified by a lot of users. virtualfxmarket offers automatic BTC doubling programme, providing access to high liquidity orderbook for top currency pairs in the market. Our investment options are made to meet the needs and requirements of all investors with various ranges of financial capabilitties.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </Slide>
    )
}

const FAQ = ({slideIn}) => {
     const [expanded, setExpanded] = React.useState('panel0');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return(
        <Slide  direction="right" in={slideIn} mountOnEnter  >
               <Box 
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
               >

                {
                    FAQdetails.map((item, index) => (
                        <CustomTimeLine
                            title = {item.title}
                            text = {item.text}
                            key = {item.text}
                            expanded={expanded === `panel${index + 1}`}
                            onChange={handleChange(`panel${index + 1}`)}
                        />
                    ))
                    }
               </Box>
                  
            </Slide>
    )
}

const CustomTimeLine = ({title, text, onChange, expanded}) => {
    return(
        <Box display="flex"
             paddingY={1}
             maxWidth = "500px"
        >
            {/* Dot and vertical line */}
            <Box display ="flex"
                 alignItems="center" 
                 flexDirection="column" 
                 paddingX={2} 
            >
                <TimelineDot color={"primary"}  style={{marginTop:0}} />
                <Box bgcolor={expanded? "primary.main" : "text.primary"} 
                     height="100%" 
                     width={2} 
                />
            </Box>

            {/* Accordion */}
            <Box paddingBottom={1}>
                <Accordion  expanded ={expanded} onChange = {onChange}
                >
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    >
                         <Typography>
                             <Box 
                                fontWeight={600}
                                >
                                {title}
                             </Box>
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" >
                            {text}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
           
    )
}