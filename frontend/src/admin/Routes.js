import React from 'react';
import { Route, useRouteMatch } from 'react-router';
import AddCategory from './pages/category/AddCategory';

const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Route to={`${path}/category/add`} component={AddCategory} />
    </>
  );
};

export default Routes;
