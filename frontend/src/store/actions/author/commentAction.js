import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const addComment = (postSlug, body, callBack) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .post(`/author/comment/${postSlug}`, { body })
    .then((response) => {
      const comment = response.data;
      dispatch({
        type: types.ADD_COMMENT,
        payload: { comment },
      });
      dispatchLoading(dispatch, false);
      callBack(true);
    })
    .catch((e) => {
      dispatch({
        type: types.SET_COMMENT_ERRORS,
        payload: {
          page: 'add',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
      callBack(false);
    });
};

export const editComment =
  ({ postSlug, commentId, body }, callBack) =>
  (dispatch) => {
    dispatchLoading(dispatch, true);
    axios
      .put(`/author/comment/${postSlug}/${commentId}`, { body })
      .then((response) => {
        const comment = response.data;
        dispatch({
          type: types.EDIT_COMMENT_PUBLIC,
          payload: { comment, commentId },
        });
        dispatchLoading(dispatch, false);
        callBack(true);
      })
      .catch((e) => {
        dispatch({
          type: types.SET_COMMENT_ERRORS,
          payload: {
            page: 'editComment',
            errors: e.response.data,
          },
        });
        dispatchLoading(dispatch, false);
        callBack(false);
      });
  };

export const deleteComment =
  ({ postSlug, commentId }) =>
  (dispatch) => {
    dispatchLoading(dispatch, true);
    axios
      .delete(`/author/comment/${postSlug}/${commentId}`)
      .then(() => {
        dispatch({
          type: types.DELETE_COMMENT_PUBLIC,
          payload: { commentId },
        });
        dispatchLoading(dispatch, false);
      })
      .catch((e) => {
        dispatch({
          type: types.SET_COMMENT_ERRORS,
          payload: {
            page: 'deleteComment',
            errors: e.response.data,
          },
        });
        dispatchLoading(dispatch, false);
      });
  };

export const commentReplyAdd = (commentId, body, callBack) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .post(`/author/reply/${commentId}`, { body })
    .then((response) => {
      const reply = response.data;

      dispatch({
        type: types.ADD_REPLY,
        payload: { reply, commentId },
      });
      dispatchLoading(dispatch, false);
      callBack(true);
    })
    .catch((e) => {
      dispatch({
        type: types.SET_COMMENT_ERRORS,
        payload: {
          page: 'addReply',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false);
      callBack(false);
    });
};

export const commentReplyEdit =
  ({ commentId, replyId, body }, callBack) =>
  (dispatch) => {
    dispatchLoading(dispatch, true);
    axios
      .put(`/author/reply/${commentId}/${replyId}`, { body })
      .then((response) => {
        const reply = response.data;

        dispatch({
          type: types.EDIT_REPLY_PUBLIC,
          payload: { reply, commentId, replyId },
        });
        dispatchLoading(dispatch, false);
        callBack(true);
      })
      .catch((e) => {
        dispatch({
          type: types.SET_COMMENT_ERRORS,
          payload: {
            page: 'editReply',
            errors: e.response.data,
          },
        });
        dispatchLoading(dispatch, false);
        callBack(false);
      });
  };

export const commentReplyDelete =
  ({ commentId, replyId }) =>
  (dispatch) => {
    dispatchLoading(dispatch, true);
    axios
      .delete(`/author/reply/${commentId}/${replyId}`)
      .then(() => {
        dispatch({
          type: types.DELETE_REPLY_PUBLIC,
          payload: { commentId, replyId },
        });
        dispatchLoading(dispatch, false);
      })
      .catch((e) => {
        dispatch({
          type: types.SET_COMMENT_ERRORS,
          payload: {
            page: 'deleteReply',
            errors: e.response.data,
          },
        });
        dispatchLoading(dispatch, false);
      });
  };
