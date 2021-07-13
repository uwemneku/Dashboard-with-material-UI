import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core'
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import React from 'react'
import UserAvar from './../../shared/UserAvar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { common } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root:{

    },
    paper:{
        padding: "15px",
        borderRadius: 20,
        backgroundColor:"rgb(23, 28, 36)"
    }
}))

function Menu(){
    return(
        <Grid container spacing={5} direction="column" >
            <Grid item>
                <UserCard />
            </Grid>
            <Divider variant="fullWidth" style={{backgroundColor:"gray", padding:"0.1px"}} orientation="horizontal" flexItem />
            <Grid item>
                <NestedList />
            </Grid>
        </Grid>
        
    )
}

function UserCard() {
    const classes = useStyles() 
    return (
            <Paper className={classes.paper} elevation={5} >
                <Grid container 
                      alignItems="center" 
                      spacing={2}
                >
                    <Grid item>
                        <UserAvar dimension={50} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2"  >
                            <Box fontWeight={800} color="common.white">
                                    John Doe
                            </Box>
                        </Typography>
                        <Typography variant="caption" >
                            <Box component="span" color="text.secondary" >
                                Your Plan :  
                            </Box>
                            <Box component="span" color="primary.main" fontWeight={600}>
                                {  }Gold
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>   
    )
}

 function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Typography component="div" id="nested-list-subheader">
              <Box fontWeight={600} color="common.white" >
                    General
              </Box>
          </Typography>
        }
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="OverView" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Acocunt" />
        </ListItem>
        
      </List>
    );
  }


export default Menu
