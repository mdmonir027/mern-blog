import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useMemo, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { postLikeUnlike } from '../../../../store/actions/likeAction';

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
  postLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Post = ({ postLikeUnlike, postData }) => {
  const classes = useStyles();
  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState.isAuthenticated;

  const { likes, slug, title, body, user, createdAt, comments } = postData;

  const [liked, setLiked] = useState(false);

  useMemo(() => {
    if (
      authState.isAuthenticated &&
      postData?.likes?.includes(authState.user._id)
    ) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [authState, postData]);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            className={classes.avatar}
            alt={user?.username || 'username'}
            src={user?.profilePic || 'h'}
          />
        }
        title={user?.username || 'username'}
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
            <IconButton
              aria-label='add to favorites'
              onClick={() => postLikeUnlike(slug)}
            >
              <FavoriteIcon style={{ color: liked ? 'red' : '' }} />
            </IconButton>
          ) : (
            <Button disabled>
              <FavoriteIcon />
            </Button>
          )}

          {likes?.length || 0}
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

          {comments?.length || 0}
        </div>
      </CardActions>
    </Card>
  );
};

export default connect(null, { postLikeUnlike })(Post);
