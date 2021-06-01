import jwtDecode from 'jwt-decode';
import axios from '../../utils/axios';
import dispatchLoading from '../../utils/dispatchLoading';
import * as types from './types';

export const loginAction = (user) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_USER_LOADING);
  axios
    .post('/auth/login', user)
    .then((response) => {
      console.log(response);
      const { token } = response.data;
      const tokenDecodedUser = jwtDecode(token);
      dispatch({
        type: types.SET_USER,
        payload: {
          user: tokenDecodedUser,
        },
      });
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
