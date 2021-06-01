import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './admin/Admin';
import './App.css';
import Login from './auth/pages/Login';
import Register from './auth/pages/Register';
import Header from './shared/header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ padding: '10px 0' }}>
        <Switch>
          <Route path='/' exact>
            <Container>
              <h2>Hello world 1</h2>
            </Container>
          </Route>
          <Route path='/login'>
            <Container>
              {' '}
              <Login />
            </Container>
          </Route>
          <Route path='/register'>
            <Container>
              {' '}
              <Register />
            </Container>
          </Route>
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
