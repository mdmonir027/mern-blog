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
    case types.ADD_REPLY: {
      const { reply, commentId } = action.payload;

      const comments = state.comments.map((comment) => {
        if (comment._id === commentId) {
          comment.replies.push(reply);
          return comment;
        }
        return comment;
      });

      return {
        ...state,
        comments,
      };
    }

    case types.COMMENT_LIKE_UNLIKE: {
      const { liked, commentId, userId } = action.payload;

      const comments = state.comments.map((comment) => {
        if (comment._id === commentId) {
          if (!liked) {
            const index = comment.likes.indexOf(userId);
            comment.likes.splice(index, 1);
          } else {
            comment.likes.push(userId);
          }
          return comment;
        }
        return comment;
      });
      return {
        ...state,
        comments,
      };
    }

    default:
      return state;
  }
};

export default commentReducer;
