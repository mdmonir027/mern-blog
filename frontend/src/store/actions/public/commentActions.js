import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const fetchComments = (postSlug) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get(`/u/comment/${postSlug}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_COMMENTS,
        payload: { comments: response.data },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e);
      dispatchLoading(dispatch, false);
    });
};
