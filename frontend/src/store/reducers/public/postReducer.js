import * as types from '../../actions/types';

const init = {
  posts: [],
  currentPage: 0,
  itemPerPage: 0,
  totalPage: 0,
  totalPost: 0,
  recent: [],
  single: undefined,
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_POSTS: {
      const { currentPage, itemPerPage, totalPage, totalPost, posts } =
        action.payload;
      return {
        ...state,
        currentPage,
        itemPerPage,
        totalPage,
        totalPost,
        posts,
      };
    }
    case types.FETCH_RECENT_POSTS: {
      const { recent } = action.payload;
      return {
        ...state,
        recent,
      };
    }
    case types.POST_LIKE_UNLIKE: {
      const { liked, userId, postSlug } = action.payload;

      const post = state.single;

      if (post.slug === postSlug) {
        if (liked) {
          post.likes.push(userId);
        } else {
          const index = post.likes.indexOf(userId);
          if (index > -1) post.likes.splice(index, 1);
        }
      }

      const updatedPosts = state.posts.map((post) => {
        if (post.slug === postSlug) {
          if (liked) {
            post.likes.push(userId);
          } else {
            const index = post.likes.indexOf(userId);
            if (index > -1) post.likes.splice(index, 1);
          }
        }
        return post;
      });

      return {
        ...state,
        posts: updatedPosts,
        single: post,
      };
    }
    case types.FETCH_SINGLE_POST: {
      const { post } = action.payload;

      return {
        ...state,
        single: post,
      };
    }
    case types.DELETE_POST_PUBLIC: {
      return {
        ...state,
        single: undefined,
      };
    }

    default:
      return state;
  }
};

export default postReducer;
