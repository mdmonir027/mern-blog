import { Card } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import BookIcon from '@material-ui/icons/Book';
import CategoryIcon from '@material-ui/icons/Category';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { logoutAction } from '../../../store/actions/authActions';
import useStyles from './style/sidebar';

const Sidebar = ({ logoutAction }) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [postMenu, setPostMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const logoutHandler = () => {
    logoutAction(history, '/login');
  };

  return (
    <Card>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        className={classes.root}
      >
        <ListItem>
          <Link to={`${url}/dashboard`} className={classes.link}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </Link>
        </ListItem>

        <ListItem button onClick={() => setCategoryMenu(!categoryMenu)}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary='Category' />
        </ListItem>
        <Collapse in={categoryMenu} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/category/add`} className={classes.link}>
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='Add Category' />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/category`} className={classes.link}>
                <ListItemIcon>
                  <ArrowRightAltIcon />
                </ListItemIcon>
                <ListItemText primary='Manage Category' />
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => setPostMenu(!postMenu)}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary='Post' />
        </ListItem>
        <Collapse in={postMenu} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/post/add`} className={classes.link}>
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='Add Post' />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/post`} className={classes.link}>
                <ListItemIcon>
                  <ArrowRightAltIcon />
                </ListItemIcon>
                <ListItemText primary='Manage Post' />
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => setProfileMenu(!profileMenu)}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItem>
        <Collapse in={profileMenu} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/profile`} className={classes.link}>
                <ListItemIcon>
                  <VisibilityOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='View' />
              </Link>
            </ListItem>

            <ListItem button className={classes.nested}>
              <Link
                to={`${url}/profile/change-password`}
                className={classes.link}
              >
                <ListItemIcon>
                  <VpnKeyOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Change Password' />
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem onClick={logoutHandler} className={classes.logoutButton}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary='Log Out' />
        </ListItem>
      </List>
    </Card>
  );
};

export default connect(null, { logoutAction })(Sidebar);
