import jwtDecode from 'jwt-decode';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { SET_USER } from './store/actions/types';
import store from './store/store';

const token = localStorage.getItem('auth_token');

if (token) {
  const decodedToken = jwtDecode(token);
  const dateNow = Date.now();
  if (dateNow > decodedToken.exp) {
    localStorage.removeItem('auth_token');
    store.dispatch({
      type: SET_USER,
      payload: { user: {} },
    });
  } else {
    store.dispatch({
      type: SET_USER,
      payload: { user: decodedToken },
    });
  }
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
