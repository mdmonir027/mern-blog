import { Grid } from '@material-ui/core';
import React from 'react';
import Categories from '../components/category/components/Categories';
import Posts from '../components/posts/components/Posts';
import Sidebar from '../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Categories />
        </Grid>
        <Grid item md={6}>
          <Posts />
        </Grid>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
