import { Box, Button, Container, Divider, Grid, IconButton, InputAdornment, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root:{
    },
}))

export default function SignUp() {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {setShowPassword(!showPassword)}
    return (
        <Container maxWidth="sm"  >
            {/* <Paper elevation={3} className={classes.root}  > */}
                
                    <form title="Log in">
                        <Grid direction="column"
                                container
                                spacing={2}
                        >
                            <Grid item>
                                <TextField fullWidth label="Email Address" type="email" variant="outlined" size="small" />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth 
                                            label="Password" 
                                            type="password" 
                                            variant="outlined" 
                                            size="small"
                                            InputProps = {{
                                                endAdornment: <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                    edge="end"
                                                                >
                                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                                </InputAdornment>
                                            }}
                                    />
                                </Grid>
                                <Grid item >
                                    <Button fullWidth color="primary" variant="contained" >
                                        Sign Up
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    
                    <Divider light variant="fullWidth" />
                    <Box paddingY={2} >
                        <Typography color="primary" >
                            <Link to="/" > 
                            Log in
                            </Link>
                        </Typography>
                        <Typography>
                            <Link to="/" > 
                            Forgot Password
                            </Link>
                        </Typography>
                    </Box>
            {/* </Paper> */}
        </Container>
    )
}
