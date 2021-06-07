import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getAllCategories } from '../store/actions/author/categoryActions';
import { getProfile } from '../store/actions/author/profileAction';
import Sidebar from './components/sidebar/Sidebar';
import Routes from './Routes';

const Admin = ({ auth, getAllCategories, getProfile, profile }) => {
  const history = useHistory();

  const [hasProfile, setHasProfile] = useState(false);

  if (!auth.isAuthenticated) {
    history.push('/login');
  }

  useEffect(() => {
    if (auth.isAuthenticated && auth.user.isAdmin) {
      getAllCategories();
    }
  }, [getAllCategories, auth, getProfile]);

  useEffect(() => getProfile(), [getProfile]);

  // if (auth.isAuthenticated && !profile.hasProfile) {
  // }

  useEffect(() => setHasProfile(profile.hasProfile), [profile.hasProfile]);

  // useEffect(() => {
  //   if (hasProfile) {
  //     history.push('/admin/profile/create');
  //   }
  // }, [hasProfile, history]);

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
  profile: state.author.profile,
});

export default connect(mapStateToProps, { getAllCategories, getProfile })(
  Admin
);
