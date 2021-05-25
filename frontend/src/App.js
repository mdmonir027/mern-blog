import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from './admin/Admin';
import './App.css';
import Public from './public/Public';
import Header from './shared/components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <div style={{ padding: '10px 0' }}>
          <Switch>
            <Admin />
            <Public />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
