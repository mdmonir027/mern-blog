import { Divider, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../../../store/actions/author/commentAction';
const useStyles = makeStyles({
  commentForm: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  loginTitle: {
    marginTop: '20px',
    marginBottom: '20px',
    color: 'red',
  },
});

const CommentAdd = ({ addComment, isAuthenticated, comment }) => {
  const classes = useStyles();
  const { slug } = useParams();
  const [text, setText] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    addComment(slug, text, (isSuccess) => {
      if (isSuccess) {
        setText('');
      }
    });
  };

  const error = useMemo(() => {
    if (comment.error.page === 'add') return comment.error.errors;
    return {};
  }, [comment.error]);

  if (!isAuthenticated) {
    return (
      <>
        <h2 className={classes.loginTitle}>Please log in to comment</h2>
        <Divider />
      </>
    );
  }

  return (
    <form className={classes.commentForm} onSubmit={submitHandler}>
      <TextField
        placeholder='write a comment'
        fullWidth
        className={classes.commentInput}
        value={text}
        onChange={(event) => setText(event.target.value)}
        error={!!error.body}
        helperText={error.body ? error.body : ''}
      />
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  comment: state.public.comments,
});

export default connect(mapStateToProps, { addComment })(CommentAdd);
