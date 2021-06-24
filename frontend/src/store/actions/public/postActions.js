import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const fetchPosts = (itemPerPage, currentPage) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get(`/post?page=${currentPage}&item=${itemPerPage}`)
    .then((response) => {
      const { currentPage, itemPerPage, totalPage, totalPost, data } =
        response.data;
      dispatch({
        type: types.FETCH_POSTS,
        payload: {
          posts: data,
          currentPage,
          itemPerPage,
          totalPage,
          totalPost,
        },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e);
      dispatchLoading(dispatch, false);
    });
};

export const fetchRecentPosts = () => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get(`/post?recent=true`)
    .then((response) => {
      const recent = response.data;
      dispatch({
        type: types.FETCH_RECENT_POSTS,
        payload: { recent },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e);
      dispatchLoading(dispatch, false);
    });
};

export const fetchSinglePost = (slug) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get(`/post/${slug}`)
    .then((response) => {
      const post = response.data;
      dispatch({
        type: types.FETCH_SINGLE_POST,
        payload: { post },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e);
      dispatchLoading(dispatch, false);
    });
};

export const deletePost = (slug , callBack) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .delete(`/author/post/${slug}`)
    .then(() => {
      dispatch({
        type: types.DELETE_POST_PUBLIC,
      });
      callBack(true)
    })
    .catch((e) => {
      console.log(e);
      dispatchLoading(dispatch, false);
      callBack(true)
    });
};
