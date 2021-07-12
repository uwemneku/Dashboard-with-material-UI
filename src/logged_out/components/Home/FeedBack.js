import React, { useEffect, useRef, useState } from 'react'
import review from '../../../media/review.json'
import LottieWrapper from '../../../shared/LottieWrapper';
import { Avatar, Box, Container, Fade, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { useViewportSpy } from 'beautiful-react-hooks';

const reviews = [
    {
        name:"Jason Allingnton",
        text:"virtualfxmarket is the best place I have ever traded with. They are reliable and swift in doing business with them. Five star love for them. I highly recommend."
    },
    {
        name:"Jason Allingnton",
        text:"If it is not virtualfxmarket I would have being living in an abadoned home. They are the best investment platform I have evert traded with. Much love for virtualfxmarket."
    },
    {
        name:"Jason Allingnton",
        text:"virtualfxmarket is the most complete cryptocurrency investment platform. I so much love them for they are the best so far I have being dealing with cryptocurrency."
    },
    {
        name:"Jason Allingnton",
        text:"virtualfxmarket is the best place I have ever traded with. They are reliable and swift in doing business with them. Five star love for them. I highly recommend."
    },
    {
        name:"Jason Allingnton",
        text:"virtualfxmarket is the best place I have ever traded with. They are reliable and swift in doing business with them. Five star love for them. I highly recommend."
    },
    {
        name:"Jason Allingnton",
        text:"virtualfxmarket is the best place I have ever traded with. They are reliable and swift in doing business with them. Five star love for them. I highly recommend."
    },
    {
        name:"Jason Allingnton",
        text:"virtualfxmarket is the best place I have ever traded with. They are reliable and swift in doing business with them. Five star love for them. I highly recommend."
    },
]

function FeedBack() {
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    return (
       <Box minHeight="100vh" className="center-contents-veritically" paddingY={10} paddingX={5}>
           
             <Typography variant={matches_smDown ? "h5" : "h4"} >
                    <Box color="common.white" component="div" bgcolor="primary.main" borderRadius={2} padding={1} >
                         Client Feedbacks
                    </Box>
            </Typography>
            <Container maxWidth="xs">
                    <LottieWrapper data={review} height="60%" width="60%" />
             </Container>
           <Box display="flex"
                 alignItems="center"
                 justifyContent="space-between"
                 flexWrap="wrap"        
            >
            {reviews.map(review => 
                <FeedBackCards name={review.name}
                                text={review.text}
                 />
                )
            }
           </Box>
       </Box>
    )
}
function FeedBackCards({name, text}){
        const ref = useRef();
        const [isVisible, setIsVisible] = useState(false)
        const hasEnteredScreen = useViewportSpy(ref, {rootMargin: "-100px"});

        useEffect(() => {
            hasEnteredScreen && setIsVisible(true)
        }, [hasEnteredScreen])
    return (
        <Box 
        maxWidth="300px"
        margin={2}
            
        >   
        <Fade ref={ref} in={isVisible} style={{boxSizing:"border-box"}}  >
            <Paper  >
                <Box 
                   display="flex"
                   flexDirection="column"
                   alignItems="center" 
                   justifyContent="center"
                   paddingX={4}
                   paddingY={3}
                >
                <Avatar style={{width:70, height:70}} />
                <Typography variant="h5">
                    <Box paddingY={2}>
                        {name}
                    </Box>
                </Typography>
                <Typography>
                    <Box textAlign="center" >
                        {text}
                    </Box>
                </Typography>
                </Box>
            </Paper>
            </Fade>
        </Box>
    )
}
export default FeedBack
