import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './admin/Admin';
import './App.css';
import Home from './public/pages/Home';
import Public from './public/Public';
import Header from './shared/components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <div style={{ padding: '10px 0' }}>
          <Switch>
            <Route path='/' exact component={Home} />
            {/* root route */}
            <Admin />
            <Public />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
