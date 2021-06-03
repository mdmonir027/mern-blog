import * as types from '../../actions/types';
const init = {
  posts: [],
  post: {},
  error: {
    page: null,
    errors: {},
  },
  loading: false,
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_POSTS: {
      const { posts } = action.payload;
      return {
        posts,
        post: {},
        error: {
          page: null,
          errors: {},
        },
        loading: false,
      };
    }
    case types.ADD_POST: {
      const { post } = action.payload;
      const posts = [...state.posts, post];
      return {
        ...state,
        posts,
      };
    }
    case types.SET_POSTS_LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    }
    case types.SET_POSTS_ERRORS: {
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

export default postReducer;
