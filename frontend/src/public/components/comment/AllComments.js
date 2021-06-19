import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../../../store/actions/public/commentActions';
import Comment from './Comment';

const useStyles = makeStyles({
  allCommentsTitle: {
    marginBottom: '10px',
    fontWeight: '600',
  },
});
const AllComments = ({ fetchComments, comments }) => {
  const classes = useStyles();

  const { slug } = useParams();

  useEffect(() => fetchComments(slug), [fetchComments, slug]);
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
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              username={comment?.user?.username}
              profilePic={comment?.user?.profilePic}
              body={comment?.body}
            />
          ))
        ) : (
          <h3>No Comments Added!</h3>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.public.comments,
});

export default connect(mapStateToProps, { fetchComments })(AllComments);
