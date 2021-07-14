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
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
      color: "white",
      
    },
    paper:{
      padding: "15px",
      borderRadius: 20,
      backgroundColor:"#001322"
    },
    listText:{
      fontSize: theme.typography.subtitle1

    }
}))

const list1 =[
  {
    name:"Dashboard",
    icon: <HomeIcon color="primary" />,
    link: "/dashboard",
  },
  {
    name:"Fund Account",
    icon: <AccountBalanceWalletIcon color="primary" />,
    link: "/fund",
  },
  {
    name:"Make Withdrawal",
    icon: <LocalMallIcon color="primary" />,
    link: "/withdrawal",
  },
  {
    name:"Investment",
    icon: <TrendingUpIcon color="primary" />,
    link: "/investment",
  },
  
]
const list2 =[
  {
    name:"Edit Profile",
    icon: <PersonIcon color="primary" />,
    link: "/profile",
  },
  {
    name:"Support",
    icon: <LiveHelpIcon color="primary" />,
    link: "/support",
  },
  {
    name:"Referral",
    icon: <AccountTreeIcon color="primary" />,
    link: "/referral",
  },
  {
    name:"Logout",
    icon: <AccountBalanceWalletIcon color="primary" />,
    link: "/logout",
  },
]

function Menu(){
    return(
        <Grid container spacing={5} direction="column" style={{paddingBottom: "100px"}} >
            <Grid item>
                <UserCard />
            </Grid>
            <Divider variant="fullWidth" style={{backgroundColor:"#1e88e5", padding:"0.1px"}} orientation="horizontal" flexItem />
            <Grid item>
                <NestedList title="General" data={list1}  />
            </Grid>
            <Grid item>
                <NestedList title="Others" data={list2}  />
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

 function NestedList({data, title}) {
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
                    {title}
              </Box>
          </Typography>
        }
        className={classes.root}
      >
        {
          data.map(item => (
          <Link to={item.link}>
            <ListItem  button>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText classes={{primary:classes.listText}}  color="text.main" primary={item.name} />
            </ListItem>
          </Link>  
          ))
        }
      </List>
    );
  }


export default Menu
