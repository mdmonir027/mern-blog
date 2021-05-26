import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login/page/Login';
import Registration from './registration/page/Registration';

const Admin = () => {
  return (
    <div>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Registration} />
    </div>
  );
};

export default Admin;
