import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddCategory from './pages/category/AddCategory';
import ManageCategory from './pages/category/ManageCategories';
import AddPost from './pages/post/AddPost';
import EditPost from './pages/post/EditPost';
import ManagePost from './pages/post/ManagePost';
import CreateProfile from './pages/profile/CreateProfile';

const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`/`} component={AdminPage} />
        <Route path={`${path}/category/add`} component={AddCategory} />
        <Route path={`${path}/category`} component={ManageCategory} />
        <Route path={`${path}/post/add`} component={AddPost} />
        <Route path={`${path}/post/edit/:slug`} component={EditPost} />
        <Route path={`${path}/post`} component={ManagePost} />
        <Route path={`${path}/profile/create`} component={CreateProfile} />
      </Switch>
    </>
  );
};

const AdminPage = () => <h2>Admin</h2>;

export default Routes;
