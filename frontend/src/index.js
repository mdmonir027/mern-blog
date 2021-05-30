import jwtDecode from 'jwt-decode';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { SET_USER } from './store/actions/types';
import store from './store/store';
import setAuthToken from './utils/setAuthToken';

const token = localStorage.getItem('auth_token');
if (token) {
  const user = jwtDecode(token);
  localStorage.removeItem('auth_token');
  if (new Date().getTime() > user.exp) {
    store.dispatch({
      type: SET_USER,
      payload: { user: {} },
    });
  } else {
    setAuthToken(token);
    store.dispatch({
      type: SET_USER,
      payload: { user },
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
