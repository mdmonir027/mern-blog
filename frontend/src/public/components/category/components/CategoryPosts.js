import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  postsWrapper: {
    background: '#F5F5F5',
  },
}));

const CategoryPosts = ({ category }) => {
  const classes = useStyles();
  return (
    <CardContent className={classes.postsWrapper}>
      <Link to='/post' className={classes.link}>
        <Typography variant='p'>
          Set aside off of the heat to let....
        </Typography>
      </Link>
    </CardContent>
  );
};

export default CategoryPosts;
