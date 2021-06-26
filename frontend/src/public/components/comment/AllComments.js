import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../../../store/actions/public/commentActions';
import Comment from './Comment';
import useStyles from './style/allComment';

const AllComments = ({ fetchComments, comments }) => {
  const classes = useStyles();

  const { slug } = useParams();

  useEffect(() => fetchComments(slug), [fetchComments, slug]);

  if (comments.length === 0) {
    return null;
  }

  return (
    <div>
      <Typography
        variant='h5'
        component='h6'
        className={classes.allCommentsTitle}
      >
        All Comments
      </Typography>

      <div className={classes.allComments}>
        {comments.map((comment) => (
          <Comment
            username={comment?.user?.username}
            profilePic={comment?.user?.profilePic}
            body={comment?.body}
            likes={comment.likes}
            commentId={comment._id}
            createdAt={comment.createdAt}
            key={comment._id}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.public.comments.comments,
});

export default connect(mapStateToProps, { fetchComments })(AllComments);
