import { Divider, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../../store/actions/author/commentAction';
const useStyles = makeStyles({
  replyForm: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  loginTitle: {
    marginTop: '20px',
    marginBottom: '20px',
    color: 'red',
  },
});

const ReplyAdd = ({ isAuthenticated, comment }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const error = useMemo(() => {
    if (comment.error.page === 'addReply') return comment.error.errors;
    return {};
  }, [comment.error]);

  if (!isAuthenticated) {
    return (
      <>
        <h5 className={classes.loginTitle}>Please log in to Reply</h5>
        <Divider />
      </>
    );
  }

  return (
    <form className={classes.replyForm} onSubmit={submitHandler}>
      <TextField
        placeholder='reply a comment'
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

export default connect(mapStateToProps, { addComment })(ReplyAdd);
