import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { commentReplyDelete } from '../../../store/actions/author/commentAction';
import { replyLikeUnlike } from '../../../store/actions/author/likeUnlikeAction';
import { creationTime } from '../../utils/timeUtils';
import ReplyEdit from './ReplyEdit';
import style from './style/Reply.module.css';
const useStyles = makeStyles({
  commentBody: {
    marginTop: '12px',
  },
  commentDetails: {
    background: '#F3F3F3',
    paddingLeft: ' 10px',
    paddingTop: ' 5px',
    paddingBottom: ' 5px',
    borderRadius: '5px',
  },
  username: {
    fontWeight: 'bold',
  },
  commentFooter: {
    display: 'flex',
    paddingRight: '30px',
    paddingLeft: '10px',
    fontSize: '13px',
    marginTop: '4px',
  },
  footerButton: {
    cursor: 'pointer',
    marginRight: '15px',
  },
});

const Reply = ({
  username,
  body,
  profilePic,
  likes,
  createdAt,
  commentId,
  userId,
  isAuthenticated,
  replyLikeUnlike,
  replyId,
  commentReplyDelete,
}) => {
  const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false);
  const [replyEdit, setReplyEdit] = useState(false);

  React.useEffect(() => setIsLiked(likes.includes(userId)), [likes, userId]);
  const replyLikeUnlikeHandle = () => {
    replyLikeUnlike(commentId, replyId, userId, (r) => setIsLiked(r));
  };

  const deleteCommentReplyHandler = () => {
    commentReplyDelete({ commentId, replyId });
  };

  return (
    <Grid container spacing={2} wrap='nowrap' className={classes.commentBody}>
      <Grid item>
        <Avatar src={`http://${profilePic}`} alt={username} />
      </Grid>
      <Grid item style={{ minWidth: '210px' }}>
        <div className={classes.commentDetails}>
          <Grid container justify='space-between' className={style.replySec}>
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
                    onClick={() => setReplyEdit(!replyEdit)}
                  >
                    <EditIcon />
                  </div>
                  <div
                    className={style.panelIcon}
                    onClick={deleteCommentReplyHandler}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </Grid>
            )}
          </Grid>

          {replyEdit ? (
            <ReplyEdit
              body={body}
              setReplyEdit={setReplyEdit}
              commentId={commentId}
              replyId={replyId}
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
                onClick={replyLikeUnlikeHandle}
              >
                {isLiked ? ' Liked' : ' Like'}
              </span>
            ) : (
              <span> Like</span>
            )}
          </p>
          <p className={classes.footerButton}>{creationTime(createdAt)}</p>
        </div>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state) => ({
  userId: state.auth.user._id,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  replyLikeUnlike,
  commentReplyDelete,
})(Reply);
