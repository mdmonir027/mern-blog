import React from 'react';
import { Route } from 'react-router-dom';
import SinglePost from './pages/SinglePost';
const Public = () => {
  return (
    <div>
      <Route path='/post/:slug' component={SinglePost} />
    </div>
  );
};

export default Public;
