import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

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

const Comment = ({ username, body, profilePic }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} wrap='nowrap' className={classes.commentBody}>
      <Grid item>
        <Avatar src={`http://${profilePic}`} alt={username} />
      </Grid>
      <Grid item style={{ minWidth: '210px' }}>
        <div className={classes.commentDetails}>
          <Typography component='h2' className={classes.username}>
            {username}
          </Typography>
          <Typography component='p' className={classes.body}>
            {body}
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
