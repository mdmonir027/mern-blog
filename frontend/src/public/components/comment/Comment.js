import { Avatar, Grid, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteComment } from '../../../store/actions/author/commentAction';
import { commentLikeUnlike } from '../../../store/actions/author/likeUnlikeAction';
import { creationTime } from '../../utils/timeUtils';
import AllReplies from '../reply/AllReplies';
import ReplyAdd from '../reply/ReplyAdd';
import CommentEdit from './CommentEdit';
import style from './style/comment.module.css';
import useStyles from './style/comment';

const Comment = ({
  username,
  body,
  profilePic,
  likes,
  commentId,
  createdAt,
  userId,
  isAuthenticated,
  commentLikeUnlike,
  deleteComment,
}) => {
  const classes = useStyles();
  const [allRepliesShow, setAllRepliesShow] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [commentEdit, setCommentEdit] = useState(false);

  const { slug } = useParams();

  React.useEffect(() => setIsLiked(likes.includes(userId)), [likes, userId]);

  const commentLikeUnlikeHandle = () => {
    commentLikeUnlike(commentId, userId, (result) => setIsLiked(result));
  };

  const deleteCommentHandler = () => {
    deleteComment({ postSlug: slug, commentId });
  };

  return (
    <>
      <Grid container spacing={2} wrap='nowrap' className={classes.commentBody}>
        <Grid item>
          <Avatar src={`http://${profilePic}`} alt={username} />
        </Grid>
        <Grid item style={{ minWidth: '210px' }}>
          <div className={classes.commentDetails + ' ' + style.commentSec}>
            <Grid container justify='space-between'>
              <Grid item>
                <Typography component='h2' className={classes.username}>
                  {username}
                </Typography>
              </Grid>
              {isAuthenticated && (
                <Grid item>
                  <div className={style.editPanel}>
                    <div
                      className={style.panelIcon}
                      onClick={() => setCommentEdit(!commentEdit)}
                    >
                      <EditIcon />
                    </div>
                    <div
                      className={style.panelIcon}
                      onClick={deleteCommentHandler}
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                </Grid>
              )}
            </Grid>

            {commentEdit ? (
              <CommentEdit
                body={body}
                commentId={commentId}
                setCommentEdit={setCommentEdit}
              />
            ) : (
              <Typography component='p' className={classes.body}>
                {body}
              </Typography>
            )}
          </div>
          <div className={classes.commentFooter}>
            <p className={classes.footerButton}>
              {likes.length}
              {isAuthenticated ? (
                <span
                  style={{ fontWeight: isLiked ? 'bold' : 'normal' }}
                  onClick={commentLikeUnlikeHandle}
                >
                  {isLiked ? ' Liked' : ' Like'}
                </span>
              ) : (
                <span> Like</span>
              )}
            </p>
            <p
              className={classes.footerButton}
              onClick={() => setAllRepliesShow(!allRepliesShow)}
              style={{ fontWeight: allRepliesShow ? 'bold' : 'normal' }}
            >
              Reply
            </p>
            <p className={classes.footerButton}>{creationTime(createdAt)}</p>
          </div>
        </Grid>
      </Grid>

      {allRepliesShow && (
        <div className={classes.allReplies}>
          <AllReplies commentId={commentId} />
          <ReplyAdd commentId={commentId} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user._id,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { commentLikeUnlike, deleteComment })(
  Comment
);
