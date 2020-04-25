import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // flex items-center flex-shrink-0 text-white mr-6
    flex: {
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
    primary: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      marginRight: theme.spacing(3),
      flexGrow: 1,
    },
    logo: {
      height: '2.1rem',
      marginRight: '.5rem',
    },
  }),
);

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.flex}>
        <Link to="/" className={classes.grow}>
          <div className={classes.primary}>
            <img
              src="https://arbor-software.nyc3.digitaloceanspaces.com/runes/rune-study-logo-white-130x200.png"
              alt="Rune Study Logo"
              className={classes.logo}
            />

            <Typography variant="h6">RuneStudy</Typography>
          </div>
        </Link>

        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
