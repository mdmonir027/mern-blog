import axios from '../utils/axios';
import * as types from './types';

const setPostLoading = (dispatch, loading) => {
  dispatch({ type: types.SET_POST_LOADING, payload: { loading } });
};

export const allPostsAction = () => (dispatch) => {
  setPostLoading(dispatch, true);

  axios
    .get('/post')
    .then((response) => {
      console.log(response); // todo remove later
      const posts = response.data;
      dispatch({
        type: types.SET_POSTS,
        payload: { posts },
      });
      setPostLoading(dispatch, false);
    })
    .catch((e) => console.log(e));
};

export const singlePostAction = (slug) => (dispatch) => {
  setPostLoading(dispatch, true);

  axios
    .get(`/post/${slug}`)
    .then((response) => {
      console.log(response);
      const post = response.data;
      dispatch({
        type: types.SET_SINGLE_POSTS,
        payload: { post },
      });
      setPostLoading(dispatch, false);
    })
    .catch((e) => console.log(e));
};
