import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const uploadProfilePicture = (data) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .post('/upload/profilePicture', data)
    .then((response) => {
      const { profilePic } = response.data;
      dispatch({
        type: types.UPLOAD_PROFILE_PICTURE,
        payload: { profilePic },
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
