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
    case types.EDIT_COMMENT_PUBLIC: {
      const { comment, commentId } = action.payload;

      const comments = state.comments.map((com) => {
        if (comment._id === commentId) {
          return comment;
        }
        return com;
      });

      return {
        ...state,
        comments,
      };
    }
    case types.DELETE_COMMENT_PUBLIC: {
      const { commentId } = action.payload;
      const comments = state.comments.filter((com) => com._id !== commentId);
      return {
        ...state,
        comments,
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
    case types.EDIT_REPLY_PUBLIC: {
      const { reply, commentId, replyId } = action.payload;

      const comments = state.comments.map((comment) => {
        if (comment._id !== commentId) return comment;
        const replies = comment.replies.map((r) =>
          r._id === replyId ? reply : r
        );

        return { ...comment, replies };
      });

      return {
        ...state,
        comments,
      };
    }
    case types.DELETE_REPLY_PUBLIC: {
      const { commentId, replyId } = action.payload;

      const comments = state.comments.map((comment) => {
        if (comment._id !== commentId) return comment;
        const replies = comment.replies.filter((r) => r._id !== replyId);

        return { ...comment, replies };
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

    case types.REPLY_LIKE_UNLIKE: {
      const { liked, commentId, userId, replyId } = action.payload;

      const comments = state.comments.map((comment) => {
        if (comment._id === commentId) {
          const replies = comment.replies.map((reply) => {
            if (reply._id === replyId) {
              if (!liked) {
                const index = reply.likes.indexOf(userId);
                reply.likes.splice(index, 1);
              } else {
                reply.likes.push(userId);
              }
              return reply;
            }
            return reply;
          });
          return { ...comment, replies };
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
