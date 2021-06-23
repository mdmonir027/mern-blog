import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const commentLikeUnlike =
  (commentId, userId, callBack) => (dispatch) => {
    dispatchLoading(dispatch, true);
    axios
      .get(`author/like/comment/${commentId}`)
      .then((response) => {
        const { liked } = response.data;
        dispatch({
          type: types.COMMENT_LIKE_UNLIKE,
          payload: { commentId, liked, userId },
        });
        callBack(liked);

        dispatchLoading(dispatch, false);
      })
      .catch((e) => {
        console.log(e);
        dispatchLoading(dispatch, false);
        callBack(false);
      });
  };

export const replyLikeUnlike =
  (commentId, replyId, userId, callBack) => (dispatch) => {
    dispatchLoading(dispatch, true);
    axios
      .get(`author/like/reply/${replyId}`)
      .then((response) => {
        const { liked } = response.data;
        dispatch({
          type: types.REPLY_LIKE_UNLIKE,
          payload: { liked, commentId, userId, replyId },
        });
        callBack(liked);
        dispatchLoading(dispatch, false);
      })
      .catch((e) => {
        console.log(e);
        dispatchLoading(dispatch, false);
        callBack(false);
      });
  };
