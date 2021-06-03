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

export const getAllPostAction = () => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_POSTS_LOADING);
  axios
    .get('/author/post')
    .then((response) => {
      console.log(response);
      const posts = response.data;
      dispatch({
        type: types.SET_POSTS,
        payload: { posts },
      });
      dispatchLoading(dispatch, false, types.SET_POSTS_LOADING);
    })
    .catch((e) => {
      console.log(e);
      //   dispatch({
      //     type: types.SET_POSTS_ERRORS,
      //     payload: {
      //       page: 'fetch',
      //       errors: e.response.data,
      //     },
      //   });
      dispatchLoading(dispatch, false, types.SET_POSTS_LOADING);
    });
};
