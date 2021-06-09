import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const uploadProfilePicture = (data, callBack) => (dispatch) => {
  dispatchLoading(dispatch, true);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  axios
    .post('/upload/profilePicture', data, config)
    .then((response) => {
      const { profilePic } = response.data;
      dispatchLoading(dispatch, false);
      callBack(profilePic);
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

/**
 *  headers: {
      'x-device-id': 'stuff',
      'Content-Type': 'multipart/form-data'
    }
 * 
 * 
 */
