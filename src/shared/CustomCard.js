import { Box, Container, Grid, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'




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


export default CustomCard
