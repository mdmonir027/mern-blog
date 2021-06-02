import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddCategory from './pages/category/AddCategory';
import ManageCategory from './pages/category/ManageCategories';

const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`/`} component={AdminPage} />
        <Route path={`${path}/category/add`} component={AddCategory} />
        <Route path={`${path}/category`} component={ManageCategory} />
      </Switch>
    </>
  );
};

const AdminPage = () => <h2>Admin</h2>;

export default Routes;
