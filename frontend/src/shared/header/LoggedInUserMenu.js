import { Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  menuItemLink: {
    all: 'inherit',
    background: 'none',
    width: '100%',
    color: 'inherit',
  },
}));
const LoggedInUserMenu = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className={classes.sectionDesktop}>
        <Link to='/create' className={classes.menuItemLink}>
          <IconButton edge='end' color='inherit'>
            <AddIcon />
          </IconButton>
        </Link>
        <Link to='/author' className={classes.menuItemLink}>
          <IconButton edge='end' color='inherit'>
            <Avatar
              alt='Remy Sharp'
              src='/static/images/avatar/1.jpg'
              style={{ width: '30px', height: '30px' }}
            />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
export default LoggedInUserMenu;
