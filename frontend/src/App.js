import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Container>
        <div style={{ padding: '10px 0' }}>
          <Switch>
            <Route path='/' exact>
              <h2>Hello world 1</h2>
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

export default App;
