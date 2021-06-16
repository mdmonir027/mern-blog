import * as types from '../../actions/types';
const postReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POSTS: {
      return action.payload.posts;
    }

    default:
      return state;
  }
};

export default postReducer;
