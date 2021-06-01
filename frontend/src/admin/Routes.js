import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddCategory from './pages/category/AddCategory';

const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`/`} component={AdminPage} />
        <Route path={`${path}/category/add`} component={AddCategory} />
      </Switch>
    </>
  );
};

const AdminPage = () => <h2>Admin</h2>;

export default Routes;
