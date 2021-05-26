import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
const Public = () => {
  return (
    <div>
      <Route path='/' exact component={Home} />
    </div>
  );
};

export default Public;
