import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const postLikeUnlike = (postSlug, callBack) => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get(`/author/like/${postSlug}`)
    .then((res) => {
      const { liked, userId } = res.data;
      dispatch({
        type: types.POST_LIKE_UNLIKE,
        payload: { liked, userId, postSlug },
      });
      callBack(liked);
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e);
      callBack(false);
      dispatchLoading(dispatch, false);
    });
};
