import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    // backgroundColor:theme.palette.primary.dark,
    color: "white"
  },
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="OverView" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Settings" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Profile" value="nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
