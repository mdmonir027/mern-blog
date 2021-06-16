import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const fetchPosts = () => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get('/post')
    .then((response) => {
      dispatch({
        type: types.FETCH_POSTS,
        payload: { posts: response.data },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e);
      dispatchLoading(dispatch, false);
    });
};
