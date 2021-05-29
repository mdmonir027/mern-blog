import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './admin/Admin';
import './App.css';
import Home from './public/pages/Home';
import SinglePost from './public/pages/SinglePost';
import Header from './shared/components/header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <div style={{ padding: '10px 0' }}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/post/:slug' component={SinglePost} />
            <Admin />
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

export default App;
