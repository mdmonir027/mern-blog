import * as types from '../actions/types';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_LOADING: {
      const { loading } = action.payload;
      return loading;
    }

    default:
      return state;
  }
};

export default loadingReducer;
