import * as types from '../actions/types';
const init = {
  authors: [],
  loading: false,
};

const authorReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_AUTHORS:
      const { authors } = action.payload;
      return {
        authors,
        loading: false,
      };
    case types.SET_AUTHORS_LOADING:
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };

    default:
      return state;
  }
};

export default authorReducer;
