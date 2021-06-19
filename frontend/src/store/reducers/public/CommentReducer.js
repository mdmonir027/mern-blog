import * as types from '../../actions/types';
const init = {
  comments: [],
  error: {
    page: 'add',
    errors: {},
  },
};

const commentReducer = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS: {
      const { comments } = action.payload;
      return {
        comments,
        error: {
          page: 'add',
          errors: {},
        },
      };
    }

    case types.ADD_COMMENT: {
      const { comment } = action.payload;
      return {
        comments: [comment, ...state.comments],
        error: {
          page: 'add',
          errors: {},
        },
      };
    }
    case types.SET_COMMENT_ERRORS: {
      const { errors, page } = action.payload;
      return {
        ...state,
        error: {
          page,
          errors,
        },
      };
    }

    default:
      return state;
  }
};

export default commentReducer;
