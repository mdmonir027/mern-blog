import { Grid } from '@material-ui/core';
import React from 'react';
import HomePageCategories from '../components/category/HomePageCategories';

const HomePage = () => {
  return (
    <div>
      <Grid container>
        <Grid md={4} item>
          <HomePageCategories />
        </Grid>
        <Grid md={8} item>
          Posts
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
