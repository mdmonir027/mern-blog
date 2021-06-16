import { Grid } from '@material-ui/core';
import React from 'react';
import HomePageCategories from '../components/category/HomePageCategories';
import HomePagePosts from '../components/posts/HomePagePosts';

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid md={4} item>
          <HomePageCategories />
        </Grid>
        <Grid md={8} item>
          <HomePagePosts />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
