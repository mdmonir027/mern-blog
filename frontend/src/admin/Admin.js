import { Grid } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Routes from './Routes';
const Admin = () => {
  const { url, path } = useRouteMatch();
  return (
    <div
      style={{
        marginRight: '20px',
        marginLeft: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Grid container spacing={4}>
        <Grid md={3} item>
          <Sidebar />
        </Grid>
        <Grid md={9} item>
          <Routes />
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
