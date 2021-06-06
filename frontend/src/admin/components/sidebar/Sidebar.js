import { Card } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import BookIcon from '@material-ui/icons/Book';
import CategoryIcon from '@material-ui/icons/Category';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MessageIcon from '@material-ui/icons/Message';
import PersonIcon from '@material-ui/icons/Person';
import ReplyIcon from '@material-ui/icons/Reply';
import SmsIcon from '@material-ui/icons/Sms';
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    flexBasis: '100%',
    color: 'inherit',
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [postMenu, setPostMenu] = useState(false);
  const [repliesMenu, setRepliesMenu] = useState(false);
  const [likeMenu, setLikeMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [commentMenu, setCommentMenu] = useState(false);

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

        <ListItem button onClick={() => setCommentMenu(!commentMenu)}>
          <ListItemIcon>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText primary='Comments' />
        </ListItem>
        <Collapse in={commentMenu} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/comment/add`} className={classes.link}>
                <ListItemIcon>
                  <MessageIcon />
                </ListItemIcon>
                <ListItemText primary='My Posts Comments' />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/comment`} className={classes.link}>
                <ListItemIcon>
                  <SmsIcon />
                </ListItemIcon>
                <ListItemText primary='My comment On other posts' />
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => setRepliesMenu(!repliesMenu)}>
          <ListItemIcon>
            <ReplyIcon />
          </ListItemIcon>
          <ListItemText primary='Replies' />
        </ListItem>
        <Collapse in={repliesMenu} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <Link
                to={`${url}/replies/my-post-replies`}
                className={classes.link}
              >
                <ListItemIcon>
                  <ArrowRightAltIcon />
                </ListItemIcon>
                <ListItemText primary='My Posts Replies' />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link
                to={`${url}/replies/my-replies-on-other-posts`}
                className={classes.link}
              >
                <ListItemIcon>
                  <ArrowRightAltIcon />
                </ListItemIcon>
                <ListItemText primary='My Replies On other posts' />
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => setLikeMenu(!likeMenu)}>
          <ListItemIcon>
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText primary='Like' />
        </ListItem>
        <Collapse in={likeMenu} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/like/my-post-likes`} className={classes.link}>
                <ListItemIcon>
                  <ThumbsUpDownOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='My Posts Likes' />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to={`${url}/like/my-liked-post`} className={classes.link}>
                <ListItemIcon>
                  <ThumbUpAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='My Liked Post' />
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

        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary='Log Out' />
        </ListItem>
      </List>
    </Card>
  );
};

export default Sidebar;
