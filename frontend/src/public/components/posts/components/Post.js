import { Button, Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  avatar: {
    backgroundColor: red[500],
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  iconWrapper: {
    // flexBasis: '50%',
  },
}));

const Post = ({ user, createdAt, title, body, likes, commentCount }) => {
  const classes = useStyles();
  const authState = useSelector((state) => state.auth);
  // const isAuthenticated = authState.isAuthenticated;
  const isAuthenticated = true;
  const [liked, setLiked] = useState(false);

  useMemo(() => {
    const { user } = authState;
    if (isAuthenticated && likes.includes(user._id)) {
      setLiked(true);
    }
  }, [isAuthenticated, authState, likes]);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            className={classes.avatar}
            alt={user?.username}
            src={user?.profilePic || 'h'}
          />
        }
        title={user.username}
        subheader={new Date(createdAt).toLocaleDateString()}
      />
      <Divider />
      <CardContent>
        <Typography variant='h5' color='textPrimary' component='h1'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {body}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className={classes.footer}>
        <div className={classes.iconWrapper}>
          {isAuthenticated ? (
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon style={{ color: liked ? 'red' : '' }} />
            </IconButton>
          ) : (
            <Button disabled>
              <FavoriteIcon />
            </Button>
          )}

          {likes.length}
        </div>
        <div className={classes.iconWrapper}>
          {isAuthenticated ? (
            <IconButton aria-label='add to favorites'>
              <CommentIcon />
            </IconButton>
          ) : (
            <Button disabled>
              <CommentIcon />
            </Button>
          )}

          {commentCount}
        </div>
      </CardActions>
    </Card>
  );
};

export default Post;
