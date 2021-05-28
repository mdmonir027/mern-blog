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
    case types.POST_LIKE_UNLIKE: {
      const { liked, userId, postSlug } = action.payload;

      const posts = state.posts.map((post) => {
        if (post.slug !== postSlug) return post;

        const newPost = { ...post };

        if (liked) {
          newPost.likes.push(userId);
        } else {
          newPost.likes = post.likes.filter((item) => item !== userId);
        }

        console.log(newPost);

        return newPost;
      });
      return {
        ...state,
        posts,
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
