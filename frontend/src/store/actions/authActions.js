import jwtDecode from 'jwt-decode';
import axios from '../../utils/axios';
import dispatchLoading from '../../utils/dispatchLoading';
import * as types from './types';

export const loginAction = (user, history) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_USER_LOADING);
  axios
    .post('/auth/login', user)
    .then((response) => {
      console.log(response);
      const { token } = response.data;
      const tokenDecodedUser = jwtDecode(token);
      localStorage.setItem('auth_token', token);
      dispatch({
        type: types.SET_USER,
        payload: {
          user: tokenDecodedUser,
        },
      });
      history.push('/admin/dashboard');
    })
    .catch((e) => {
      dispatch({
        type: types.SET_USER_ERRORS,
        payload: {
          errors: e.response.data,
          page: 'login',
        },
      });
      dispatchLoading(dispatch, false, types.SET_USER_LOADING);
    });
};

export const registerAction = (data, history) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_USER_LOADING);
  axios
    .post('/auth/registration', data)
    .then((response) => {
      console.log(response);
      history.push('/login');
      dispatch({
        type: types.SET_USER_NO_ERRORS,
      });
      dispatchLoading(dispatch, false, types.SET_USER_LOADING);
    })
    .catch((e) => {
      dispatch({
        type: types.SET_USER_ERRORS,
        payload: {
          page: 'register',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false, types.SET_USER_LOADING);
    });
};

export const logoutAction = (history) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_USER_LOADING);
  dispatch({
    type: types.SET_USER,
    payload: { user: {} },
  });
  setTimeout(
    () => dispatchLoading(dispatch, true, types.SET_USER_LOADING),
    500
  );
};
