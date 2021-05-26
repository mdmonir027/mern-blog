import * as types from '../actions/types';

const init = {
  isAuthenticated: false,
  user: {},
  errors: {},
  loading: false,
  errorPage: 'login',
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_AUTH_LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    }
    case types.SET_USER: {
      const { user } = action.payload;
      return {
        isAuthenticated: Object.keys(user).length !== 0,
        user,
        errors: {},
        loading: false,
      };
    }
    case types.SET_AUTH_ERROR: {
      const { errors, errorPage } = action.payload;
      return {
        ...state,
        errors,
        loading: false,
        errorPage: errorPage,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
