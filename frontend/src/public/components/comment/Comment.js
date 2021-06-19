import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  commentDetails: {
    background: '#F3F3F3',
    paddingLeft: ' 10px',
    paddingRight: ' 40px',
    paddingTop: ' 5px',
    paddingBottom: ' 5px',
    borderRadius: '5px',
  },
  title: {
    fontWeight: 'bold',
  },
  commentFooter: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingRight: '30px',
    paddingLeft: '10px',
    fontSize: '13px',
    marginTop: '4px',
  },
  footerButton: {
    cursor: 'pointer',
  },
});

const Comment = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar src='hello' alt='User' />
      </Grid>
      <Grid item>
        <div className={classes.commentDetails}>
          <Typography component='h2' className={classes.title}>
            Md Monirul Islam
          </Typography>
          <Typography component='p' className={classes.body}>
            Thank you so much
          </Typography>
        </div>
        <div className={classes.commentFooter}>
          <p className={classes.footerButton}>Like</p>
          <p className={classes.footerButton}>Reply</p>
          <p className={classes.footerButton}>1m</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Comment;
