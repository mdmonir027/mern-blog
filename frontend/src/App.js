import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './admin/Admin';
import './App.css';
import Login from './auth/pages/Login';
import Register from './auth/pages/Register';
import SimpleBackdrop from './shared/backdrop/Backdrop';
import Header from './shared/header/Header';

const App = ({ loading }) => {
  return (
    <Router>
      <Header />
      <div style={{ padding: '10px 0' }}>
        <Switch>
          <Route path='/login'>
            <Container>
              <Login />
            </Container>
          </Route>
          <Route path='/register'>
            <Container>
              <Register />
            </Container>
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/' exact>
            <Container>
              <h2>Hello world 1</h2>
            </Container>
          </Route>
        </Switch>
      </div>

      <SimpleBackdrop enabled={loading} />
    </Router>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
