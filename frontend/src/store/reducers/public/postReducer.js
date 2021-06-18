import * as types from '../../actions/types';

const init = {
  posts: [],
  currentPage: 0,
  itemPerPage: 0,
  totalPage: 0,
  totalPost: 0,
  recent: [],
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
      };
    }

    default:
      return state;
  }
};

export default postReducer;
