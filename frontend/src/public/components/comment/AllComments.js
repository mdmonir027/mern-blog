import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Comment from './Comment';

const useStyles = makeStyles({
  allCommentsTitle: {
    marginBottom: '10px',
    fontWeight: '600',
  },
});
const AllComments = () => {
  const classes = useStyles();
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
        <Comment />
      </div>
    </div>
  );
};

export default AllComments;
