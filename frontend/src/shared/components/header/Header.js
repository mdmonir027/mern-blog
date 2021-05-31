import { Avatar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allPostsAction } from '../../../store/actions/postActions';
import LoggedInUserMenu from './LoggedInUserMenu';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuItemLink: {
    all: 'inherit',
    background: 'none',
    width: '100%',
    color: 'inherit',
  },
}));

const Header = ({ allPostsAction }) => {
  const authState = useSelector((state) => state.auth);

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const isAuthenticated = authState.isAuthenticated;

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  useEffect(() => allPostsAction(), [allPostsAction]);

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
          <div className={classes.search}>
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
          </div>
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
              <LoggedInUserMenu />
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

export default connect(null, { allPostsAction })(Header);
/*



*/
