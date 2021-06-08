import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const getProfile = () => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get('/author/profile')
    .then((response) => {
      dispatch({
        type: types.SET_PROFILE,
        payload: { profile: response.data },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e); // todo remove later
      dispatch({
        type: types.SET_PROFILE_ERRORS,
        payload: {
          page: 'fetch',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
    });
};

export const createProfile =
  (profileData, history, redirectPath) => (dispatch) => {
    dispatchLoading(dispatch, true);
    axios
      .post('/author/profile', profileData)
      .then((response) => {
        dispatch({
          type: types.SET_PROFILE,
          payload: { profile: response.data },
        });
        history.push(redirectPath);
      })
      .catch((e) => {
        console.log(e); // todo remove later
        dispatch({
          type: types.SET_PROFILE_ERRORS,
          payload: {
            page: 'add',
            errors: e.response.data,
          },
        });
        dispatchLoading(dispatch, false);
      });
  };

export const updateProfile = (profileData) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .put('/author/profile', profileData)
    .then((response) => {
      dispatch({
        type: types.SET_PROFILE,
        payload: { profile: response.data },
      });
    })
    .catch((e) => {
      console.log(e); // todo remove later
      dispatch({
        type: types.SET_PROFILE_ERRORS,
        payload: {
          page: 'edit',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
    });
};

export const changePassword = (data, history) => (dispatch) => {
  dispatchLoading(dispatch, true);

  axios
    .put('/author/profile/changePassword', data)
    .then(() => {
      history.push('/admin/profile');
      dispatch({
        type: types.SET_PROFILE_ERRORS,
        payload: {
          page: null,
          errors: {},
        },
      });
    })
    .catch((e) => {
      dispatch({
        type: types.SET_PROFILE_ERRORS,
        payload: {
          page: 'password',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
    });
};
