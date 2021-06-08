import * as types from '../../actions/types';
const init = {
  profile: {},
  hasProfile: false,
  error: {
    page: null,
    errors: {},
  },
};

const profileReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_PROFILE: {
      const { profile } = action.payload;
      return {
        profile,
        hasProfile: Object.keys(profile).length !== 0,
        error: {
          page: null,
          errors: {},
        },
      };
    }

    case types.SET_PROFILE_ERRORS: {
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

export default profileReducer;
