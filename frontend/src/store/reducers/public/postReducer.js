import * as types from '../../actions/types';
const postReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POSTS: {
      return action.payload.posts;
    }
    case types.POST_LIKE_UNLIKE: {
      const { liked, userId, postSlug } = action.payload;

      const updatedPosts = state.map((post) => {
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

      return updatedPosts;
    }

    default:
      return state;
  }
};

export default postReducer;
