import * as types from '../actions/types';

const init = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: {
    page: null,
    errors: {},
  },
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_USER_LOADING:
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    case types.SET_USER:
      const { user } = action.payload;
      return {
        user,
        isAuthenticated: Object.keys(user).length !== 0,
        loading: false,
        error: {
          page: null,
          errors: {},
        },
      };
    case types.SET_USER_ERRORS:
      const { errors, page } = action.payload;
      return {
        ...state,
        error: {
          page,
          errors,
        },
      };
    case types.SET_USER_NO_ERRORS:
      return {
        ...state,
        error: {
          page: null,
          errors: {},
        },
      };
    case types.UPLOAD_PROFILE_PICTURE:
      const { profilePic } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          profilePic,
        },
      };

    default:
      return state;
  }
};

export default authReducer;
