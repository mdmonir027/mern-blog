import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getAllCategories } from '../store/actions/author/categoryActions';
import Sidebar from './components/sidebar/Sidebar';
import Routes from './Routes';

const Admin = ({ auth, getAllCategories }) => {
  const history = useHistory();

  if (!auth.isAuthenticated) {
    history.push('/login');
  }

  useEffect(() => {
    if (auth.isAuthenticated && auth.user.isAdmin) {
      getAllCategories();
    }
  }, [getAllCategories, auth]);

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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getAllCategories })(Admin);
