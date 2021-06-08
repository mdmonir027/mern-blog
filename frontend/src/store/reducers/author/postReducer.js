import * as types from '../../actions/types';
const init = {
  posts: [],
  post: {},
  error: {
    page: null,
    errors: {},
  },
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
    case types.DELETE_POST: {
      const { slug } = action.payload;
      const posts = state.posts.filter((post) => post.slug !== slug);
      return {
        ...state,
        posts,
      };
    }

    case types.SET_SINGLE_POST: {
      const { post } = action.payload;
      return {
        ...state,
        post,
      };
    }
    case types.UPDATE_POST: {
      const { post, slug } = action.payload;
      const posts = state.posts.map((p) => {
        if (p.slug === slug) return post;
        return p;
      });
      return {
        ...state,
        posts,
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
