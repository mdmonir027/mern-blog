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

export const commentReplyAdd = (commentId, body, callBack) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .post(`/author/reply/${commentId}`, { body })
    .then((response) => {
      const reply = response.data;
      dispatch({
        type: types.ADD_REPLY,
        payload: { reply },
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
