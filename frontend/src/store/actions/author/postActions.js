import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const addPostAction = (post, history) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .post('/author/post', post)
    .then((response) => {
      dispatch({
        type: types.ADD_POST,
        payload: { post: response.data },
      });
      dispatchLoading(dispatch, false);
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
      dispatchLoading(dispatch, false);
    });
};

export const getAllPostAction = () => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get('/author/post')
    .then((response) => {
      const posts = response.data;
      dispatch({
        type: types.SET_POSTS,
        payload: { posts },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e); // todo remove later
      dispatch({
        type: types.SET_POSTS_ERRORS,
        payload: {
          page: 'fetch',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
    });
};

export const deletePostAction = (slug) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .delete(`/author/post/${slug}`)
    .then((response) => {
      console.log(response);
      dispatch({
        type: types.DELETE_POST,
        payload: { slug },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e); // todo remove later
      dispatch({
        type: types.SET_POSTS_ERRORS,
        payload: {
          page: 'fetch',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
    });
};
export const getSinglePost = (slug) => (dispatch) => {
  dispatchLoading(dispatch, false);
  axios
    .get(`/author/post/${slug}`)
    .then((response) => {
      console.log(response);
      const post = response.data;
      dispatch({
        type: types.SET_SINGLE_POST,
        payload: { post },
      });
    })
    .catch((e) => {
      console.log(e); // todo remove later
      dispatch({
        type: types.SET_POSTS_ERRORS,
        payload: {
          page: 'single',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
    });
};

export const updatePostAction = (post, slug, history) => (dispatch) => {
  dispatchLoading(dispatch, false);
  axios
    .put(`/author/post/${slug}`, post)
    .then((response) => {
      console.log(response);
      dispatch({
        type: types.UPDATE_POST,
        payload: { post: response.data, slug },
      });
      dispatchLoading(dispatch, false);
      history.push('/admin/post');
    })
    .catch((e) => {
      console.log(e); // todo remove later
      dispatch({
        type: types.SET_POSTS_ERRORS,
        payload: {
          page: 'edit',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
    });
};
