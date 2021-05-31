import jwtDecode from 'jwt-decode';
import axios from '../utils/axios';
import * as types from './types';
const setAuthLoading = (dispatch, loading) => {
  dispatch({
    type: types.SET_AUTH_LOADING,
    payload: { loading: true },
  });
};

export const loginAction = (data) => (dispatch) => {
  setAuthLoading(dispatch, true);
  axios
    .post('/auth/login', data)
    .then((response) => {
      console.log(response); // todo remove later
      setAuthLoading(dispatch, true);
      const { token } = response.data;
      const user = jwtDecode(token);
      localStorage.setItem('auth_token', token);

      const obj = {
        tokenDate: user.exp,
        nowDate: Date.now(),
        isSame: user.exp === Date.now(),
        typesToken: typeof user.exp,
        typeDate: typeof Date.now(),
      };
      console.log(obj);

      dispatch({
        type: types.SET_USER,
        payload: { user },
      });
    })
    .catch((e) => {
      setAuthLoading(dispatch, false);
      console.log(e.response);
      dispatch({
        type: types.SET_AUTH_ERROR,
        payload: {
          errors: e.response.data,
          errorPage: 'login',
        },
      });
    });
};

export const registrationAction = (data, history) => (dispatch) => {
  setAuthLoading(dispatch, true);
  axios
    .post('/auth/registration', data)
    .then((response) => {
      console.log(response); // todo remove later
      setAuthLoading(dispatch, true);
      dispatch({
        type: types.SET_AUTH_ERROR,
        payload: {
          errors: {},
        },
      });
      history.push('/login');
    })
    .catch((e) => {
      setAuthLoading(dispatch, false);
      console.log(e.response);
      dispatch({
        type: types.SET_AUTH_ERROR,
        payload: {
          errors: e.response.data,
          errorPage: 'registration',
        },
      });
    });
};
