import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const addPostAction = (post, history) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_POSTS_LOADING);
  axios
    .post('/author/post', post)
    .then((response) => {
      console.log(response);
      dispatch({
        type: types.ADD_POST,
        payload: { post: response.data },
      });
      dispatchLoading(dispatch, true, types.SET_POSTS_LOADING);
      history.push('/admin/post');
    })
    .catch((e) => {
      dispatch({
        type: types.SET_POSTS_ERRORS,
        payload: {
          page: 'add',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, true, types.SET_POSTS_LOADING);
    });
};
