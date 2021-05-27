import * as types from '../actions/types';

const init = {
  posts: [],
  post: [],
  loading: false,
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_POSTS: {
      const { posts } = action.payload;
      return {
        ...state,
        posts,
      };
    }
    case types.SET_SINGLE_POSTS: {
      //   const { id } = action.payload;
      //   const post = state.posts.find((p) => p._id === id);

      const { post } = action.payload;

      return {
        ...state,
        post,
      };
    }
    case types.SET_POST_LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    }

    default:
      return state;
  }
};

export default postReducer;
