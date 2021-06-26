import { Grid } from '@material-ui/core';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Routes from './Routes';

const Public = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid md={9} sm={12} xs={12} item>
          <Routes />
        </Grid>
        <Grid md={3} sm={12} xs={12} item>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Public;
