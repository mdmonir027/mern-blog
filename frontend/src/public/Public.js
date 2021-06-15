import { Grid } from '@material-ui/core';
import React from 'react';
import Routes from './Routes';

const Public = () => {
  return (
    <div
      style={{
        marginRight: '20px',
        marginLeft: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Grid container spacing={4}>
        <Grid md={9} item>
          <Routes />
        </Grid>
        <Grid md={3} item>
          Sidebar
        </Grid>
      </Grid>
    </div>
  );
};

export default Public;
