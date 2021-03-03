import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  // Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  topBar: {
    paddingLeft: 30,
    height: 79,
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, rgba(246,242,242,1) 10%, rgba(255,255,255,1) 51%, rgba(235,231,231,1) 100%)',
    boxShadow: '0px 5px 11px -1px rgba(0,0,0,0.75)'
  },
  linkStyel: {
    color: '#01025C',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  // const [notifications] = useState([]);

  return (
    <AppBar
      className={clsx(classes.topBar, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <RouterLink
            to="/home"
            className={clsx(classes.linkStyel, className)}
          >
            Home
          </RouterLink>
          <RouterLink
            className={clsx(classes.linkStyel, className)}
            to="/home"
          >
            How It Works
          </RouterLink>
          <RouterLink
            className={clsx(classes.linkStyel, className)}
            to="/home"
          >
            Way to Play
          </RouterLink>
          <RouterLink
            className={clsx(classes.linkStyel, className)}
            to="/home"
          >
            About Us
          </RouterLink>
          <RouterLink
            className={clsx(classes.linkStyel, className)}
            to="/signup"
          >
            Sign UP
          </RouterLink>
          <RouterLink
            className={clsx(classes.linkStyel, className)}
            to="/signin"
          >
            Sign In
          </RouterLink>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="primary"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
