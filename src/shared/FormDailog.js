import { Box, Dialog, DialogContent, DialogTitle, makeStyles, Slide, Typography } from '@material-ui/core';
import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import Login from '../logged_out/components/Home/Login'
import SignUp from '../logged_out/components/Home/SignUp'

const useStyles = makeStyles((theme) => ({
    dialogPaper: {
        display: "flex",
        backgroundColor:"red",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: theme.spacing(3),
        Width:"100vw",
      },
      dialogContent: {
        // width:"100vw",
        paddingTop: 0,
        paddingBottom: 0
      }
}))
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up"  ref={ref} {...props} />;
  });

export default function FormDialog ({open=true, setOpen, formComponent, title}){
   const classes = useStyles()
   const matchLoginRoute = useRouteMatch("/login")
   const matchRegisterRoute = useRouteMatch("/register")
   const history =  useHistory()
  
    const handleClose = () => {
      history.push("/")
    };
    return(
        <div>
            <Dialog
                open={matchLoginRoute || matchRegisterRoute }
                maxWidth="xs"
                fullWidth={true}
                
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                
            >
                <DialogContent 
                 
                className={classes.dialogContent} >
                    <Typography variant={  "h5"} color="primary">
                        <Box paddingY={3} fontWeight={600}  >
                            {title}
                        </Box>
                    </Typography>
                    {matchLoginRoute && <Login /> }
                    {matchRegisterRoute && <SignUp /> }

                 </DialogContent>
            </Dialog>
        </div>
    )
}