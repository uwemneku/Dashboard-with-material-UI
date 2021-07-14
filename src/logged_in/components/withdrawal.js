import { Box, Button, Container, Divider, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, makeStyles, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Pricing from './../../logged_out/components/Home/Pricing';


const useStyles  = makeStyles((theme)=>({
    root:{
        padding: "20px",
        paddingBottom:"200px",
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
function Withdrawal() {
    const classes = useStyles()
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    // const matchUrl = useRouteMatch
    useEffect(() => {
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
                        Make a cash out request
                    </Box>
                </Typography>
                <Typography variant={matches_smDown ? "body2": "body1"}  >
                    <Box color="text.hint" >
                        Fill the form below to make a cash out request. Note that there is a service charge
                    </Box>
                </Typography>
            </Grid>

            <Grid item>
                <Login />
            </Grid>
           
        </Grid>
    )
}

 function Login() {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {setShowPassword(!showPassword)}
    const theme = useTheme();
    const matches_smDown = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Container maxWidth="xs" className={classes.root}  classes={{root: classes.root}}  >
                    
                    <form title="Log in">
                        <Grid direction="column"
                                container
                                spacing={2}
                        >
                            <Grid item>
                                    <TextField fullWidth 
                                            label="Amount" 
                                            type="number" 
                                            variant="outlined" 
                                            size=""
                                            InputProps = {{
                                                endAdornment: <InputAdornment position="end">
                                                                USD
                                                                </InputAdornment>
                                            }}
                                    />
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
                                <Grid item>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="method">Method</InputLabel>
                                    <Select
                                    labelId="method"
                                    id="method"
                                    fullWidth={true}
                                    >
                
                                    <MenuItem value={10}>Stellar</MenuItem>
                                    <MenuItem value={20}>Dash</MenuItem>
                                    <MenuItem value={30}>Paypal</MenuItem>
                                    </Select>
                                </FormControl>
                                </Grid>
                                <Grid item >
                                    <Button fullWidth color="primary" variant="contained" >
                                        Submit Request
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    
        </Container>
    )
}


export default Withdrawal
