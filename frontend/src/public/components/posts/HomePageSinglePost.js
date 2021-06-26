import { Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postLikeUnlike } from '../../../store/actions/public/LikeUnlikeAction';
import useStyles from './style/homeSinglePost';

const HomePageSinglePost = ({
  username,
  profilePic,
  createdAt,
  title,
  body,
  likes,
  commentCount,
  isAuthenticated,
  postLikeUnlike,
  slug,
  userId,
}) => {
  const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false);
  const handlePostLikeUnlike = () => {
    postLikeUnlike(slug, (r) => setIsLiked(r));
  };

  React.useEffect(() => setIsLiked(likes.includes(userId)), [likes, userId]);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            className={classes.avatar}
            alt={username}
            src={`http://${profilePic}`}
          />
        }
        title={username}
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
        <p>
          <Link className={classes.link} to={`/post/${slug}`}>
            Read more
          </Link>
        </p>
      </CardContent>
      <Divider />
      <CardActions className={classes.footer}>
        <div className={classes.iconWrapper}>
          {isAuthenticated ? (
            <IconButton
              aria-label='add to favorites'
              onClick={handlePostLikeUnlike}
            >
              <FavoriteIcon style={{ color: isLiked ? 'red' : '' }} />
            </IconButton>
          ) : (
            <IconButton disabled>
              <FavoriteIcon />
            </IconButton>
          )}

          {likes.length}
        </div>
        <div className={classes.iconWrapper}>
          <IconButton aria-label='share'>
            <CommentIcon />
          </IconButton>
          {commentCount}
        </div>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user._id,
});

export default connect(mapStateToProps, { postLikeUnlike })(HomePageSinglePost);
