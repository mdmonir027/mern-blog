import axios from '../utils/axios';
import * as types from './types';

export const postLikeUnlike = (postSlug) => (dispatch) => {
  console.log(postSlug);
  axios
    .get(`/author/like/${postSlug}`)
    .then((response) => {
      console.log(response); // todo remove later
      const { liked, userId } = response.data;
      dispatch({
        type: types.POST_LIKE_UNLIKE,
        payload: {
          liked,
          userId,
          postSlug,
        },
      });
    })
    .catch((e) => console.log(e));
};
