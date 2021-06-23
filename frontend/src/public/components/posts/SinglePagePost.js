import {
  Avatar,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { postLikeUnlike } from '../../../store/actions/public/LikeUnlikeAction';
import AllComments from '../comment/AllComments';
import CommentAdd from '../comment/CommentAdd';
const useStyles = makeStyles({
  cardBody: {
    padding: '20px',
    marginTop: ' 20px',
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  header: {
    marginBottom: '5px',
  },
  imageWrapper: {
    width: '100%',
    height: '350px',
    background: 'red',
    marginBottom: '10px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  content: {
    paddingTop: '30px',
    paddingBottom: '30px',
    fontSize: '16px',
  },
});

const SinglePagePost = (props) => {
  const {
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
    likes,
    image,
    userId,
  } = props;

  const classes = useStyles();

  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => setIsLiked(likes.includes(userId)), [likes, userId]);
  const postLikeUnlikeHandler = () => {
    postLikeUnlike(slug, (result) => setIsLiked(result));
  };

  return (
    <Container>
      <Card className={classes.cardBody}>
        <Grid container spacing={3} className={classes.header}>
          <Grid item>
            <Avatar src={`http://${profilePic}`} alt={username} />
          </Grid>
          <Grid item>
            <Typography component='h2'>{username}</Typography>
            <Typography component='p'>
              {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.imageWrapper}>
          <img src={image} alt='' className={classes.postImage} />
        </div>
        <div className={classes.postContent}>
          <Typography variant='h4' component='h1' className={classes.title}>
            {title}
          </Typography>
          <Divider />
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className={classes.content}
          />
        </div>
        <Divider />
        <div className={classes.iconBox}>
          <div className={classes.iconWrapper}>
            {isAuthenticated ? (
              <IconButton
                aria-label='add to favorites'
                onClick={postLikeUnlikeHandler}
              >
                <FavoriteIcon style={{ color: isLiked ? 'red' : '' }} />
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
        </div>
        <Divider />

        <CommentAdd />

        <AllComments />
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user._id,
});

export default connect(mapStateToProps, { postLikeUnlike })(SinglePagePost);
