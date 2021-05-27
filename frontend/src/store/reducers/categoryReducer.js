import * as types from '../actions/types';
const init = {
  loading: false,
  categories: [],
};

const categoryReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_CATEGORY_LOADING:
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    case types.SET_CATEGORIES:
      const { categories } = action.payload;
      return {
        categories,
        loading: false,
      };

    default:
      return state;
  }
};

export default categoryReducer;
