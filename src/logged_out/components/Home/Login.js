import { Box, Button, Container, Divider, Grid, IconButton, InputAdornment, makeStyles, Paper, TextField, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root:{
        padding :"0px"
    },
}))

export default function Login() {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {setShowPassword(!showPassword)}
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Container maxWidth="xs" className={classes.root}  classes={{root: classes.root}}  >
                    <Typography variant={ matches_smDown ? "h6" : "h5"} color="primary">
                        <Box paddingY={3} fontWeight={600}  >
                            Log in
                        </Box>
                    </Typography>
                    <form title="Log in">
                        <Grid direction="column"
                                container
                                spacing={2}
                        >
                            <Grid item>
                                <TextField fullWidth label="Email Address" type="email" variant="outlined" size="" />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth 
                                            label="Password" 
                                            type="password" 
                                            variant="outlined" 
                                            size=""
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
                                        Log In
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    
                    <Divider light variant="fullWidth" />
                    <Box paddingY={2} >
                        <Typography color="primary" >
                            <Link to="/" > 
                            Create Account
                            </Link>
                        </Typography>
                        <Typography>
                            <Link to="/" > 
                            Forgot Password
                            </Link>
                        </Typography>
                    </Box>
        </Container>
    )
}
