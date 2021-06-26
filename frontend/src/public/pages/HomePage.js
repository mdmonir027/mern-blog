import { Grid } from '@material-ui/core';
import React from 'react';
import HomePageCategories from '../components/category/HomePageCategories';
import HomePagePosts from '../components/posts/HomePagePosts';
import useStyles from './style/home';

const HomePage = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        marginRight: '20px',
        marginLeft: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Grid container spacing={2}>
        <Grid md={4} item className={classes.categories}>
          <HomePageCategories />
        </Grid>
        <Grid md={8} item sm={12}>
          <HomePagePosts />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
