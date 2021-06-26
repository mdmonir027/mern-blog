import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutline';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MessageIcon from '@material-ui/icons/Message';
import ReplyIcon from '@material-ui/icons/Reply';
import SmsIcon from '@material-ui/icons/Sms';
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
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

/**
 *
 * this components is a admin dashboard list menu which for future upgrade.
 */

const MenuList = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [repliesMenu, setRepliesMenu] = useState(false);
  const [likeMenu, setLikeMenu] = useState(false);
  const [commentMenu, setCommentMenu] = useState(false);

  return (
    <>
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
    </>
  );
};

export default MenuList;
