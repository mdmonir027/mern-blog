import {
  Avatar,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postLikeUnlike } from '../../../store/actions/public/LikeUnlikeAction';
import { deletePost } from '../../../store/actions/public/postActions';
import AllComments from '../comment/AllComments';
import CommentAdd from '../comment/CommentAdd';
import style from './style/SinglePagePost.module.css';
import useStyles from './style/singlePost';

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
    deletePost,
  } = props;

  const classes = useStyles();
  const history = useHistory();
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => setIsLiked(likes.includes(userId)), [likes, userId]);
  const postLikeUnlikeHandler = () => {
    postLikeUnlike(slug, (result) => setIsLiked(result));
  };

  useEffect(()=> document.title = title , [title])


  const deletePostHandle = () => {
    console.log('delete post');
    deletePost(slug, (result) => {
      if (result) {
        history.push('/');
      }
    });
  };

  return (
    <Container>
      <Card className={classes.cardBody + ' ' + style.postRoot}>
        <Grid container justify='space-between'>
          <Grid item>
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
          </Grid>
          {isAuthenticated && (
            <Grid item>
              <div className={style.editPanel}>
                <div className={style.panelIcon}>
                  <Link to={`/admin/post/edit/${slug}`}>
                    <EditIcon />
                  </Link>
                </div>
                <div onClick={deletePostHandle} className={style.panelIcon}>
                  <DeleteIcon />
                </div>
              </div>
            </Grid>
          )}
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

export default connect(mapStateToProps, { postLikeUnlike, deletePost })(
  SinglePagePost
);
