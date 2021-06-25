import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutAction } from '../../store/actions/authActions.js';
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

const LoggedInUserMenu = ({ logoutAction }) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className={classes.sectionDesktop}>
        <Link to='/admin/dashboard' className={classes.menuItemLink}>
          <IconButton edge='end' color='inherit'>
            <DashboardIcon />
          </IconButton>
        </Link>

        <IconButton
          edge='end'
          color='inherit'
          onClick={() => logoutAction(history)}
        >
          <ExitToAppIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default connect(null, { logoutAction })(LoggedInUserMenu);
