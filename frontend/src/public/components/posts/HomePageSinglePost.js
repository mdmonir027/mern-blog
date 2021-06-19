import { Divider } from '@material-ui/core';
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
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postLikeUnlike } from '../../../store/actions/public/LikeUnlikeAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '20px',
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
  link: {
    color: 'black',
    display: 'inline-block',
    textDecoration: 'none',
  },
}));

const HomePageSinglePost = ({
  username,
  profilePic,
  createdAt,
  title,
  body,
  likeCount,
  commentCount,
  isAuthenticated,
  postLikeUnlike,
  slug,
  liked,
}) => {
  const classes = useStyles();

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
              onClick={() => postLikeUnlike(slug)}
            >
              <FavoriteIcon style={{ color: liked ? 'red' : '' }} />
            </IconButton>
          ) : (
            <IconButton disabled>
              <FavoriteIcon />
            </IconButton>
          )}

          {likeCount}
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
});

export default connect(mapStateToProps, { postLikeUnlike })(HomePageSinglePost);
