import React from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './login/page/Login';

const Admin = () => {
  return (
    <div>
      <h3>Admin</h3>
      <Route path='/login' component={Login} />
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Admin;
