import { Grid } from '@material-ui/core';
import React from 'react';
import Categories from '../components/category/components/Categories';

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <Categories />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
