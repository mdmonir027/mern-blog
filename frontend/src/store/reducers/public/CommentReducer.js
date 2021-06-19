import * as types from '../../actions/types';

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS: {
      return action.payload.comments;
    }
    default:
      return state;
  }
};

export default commentReducer;
