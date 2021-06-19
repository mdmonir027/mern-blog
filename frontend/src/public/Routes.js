import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import SinglePostPage from './pages/SinglePostPage';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route path={`/post/:slug`} component={SinglePostPage} />
      </Switch>
    </>
  );
};

export default Routes;
