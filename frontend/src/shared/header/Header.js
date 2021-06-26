import { Avatar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoggedInUserMenu from './LoggedInUserMenu';
import useStyles from './style/header.js';

const Header = ({ auth }) => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const isAuthenticated = useMemo(
    () => auth.isAuthenticated,
    [auth.isAuthenticated]
  );
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            BanCoders
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to='/' className={classes.menuItemLink}>
              <IconButton edge='end' color='inherit'>
                <HomeIcon />
              </IconButton>
            </Link>
            {!isAuthenticated ? (
              <Link to='/login' className={classes.menuItemLink}>
                <IconButton edge='end' color='inherit'>
                  <AccountCircle />
                </IconButton>
              </Link>
            ) : (
              <LoggedInUserMenu loading={auth.loading} />
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label='show 4 new mails' color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label='show 11 new notifications' color='inherit'>
            <Badge badgeContent={11} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        {isAuthenticated ? (
          <>
            <MenuItem style={{ minWidth: '140px' }}>
              <Link to='/login' className={classes.menuItemLink + ' p-0'}>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='primary-search-account-menu'
                  aria-haspopup='true'
                  color='inherit'
                >
                  <Avatar
                    alt='Remy Sharp'
                    src='/static/images/avatar/1.jpg'
                    style={{ width: '30px', height: '30px' }}
                  />
                </IconButton>
                <p>User</p>
              </Link>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <Link to='/login' className={classes.menuItemLink + ' p-0'}>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='primary-search-account-menu'
                  aria-haspopup='true'
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <p>Login</p>
              </Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
