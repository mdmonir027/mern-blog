import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
const useStyles = makeStyles({
  commentForm: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

const CommentAdd = () => {
  const classes = useStyles();
  return (
    <form className={classes.commentForm}>
      <TextField
        placeholder='write a comment'
        fullWidth
        className={classes.commentInput}
      />
    </form>
  );
};

export default CommentAdd;
