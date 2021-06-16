import * as types from '../../actions/types';
const init = {
  categories: [],
  count: 0,
  category: {},
};

const categoryReducer = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES: {
      const { categories } = action.payload;
      return {
        categories,
        count: categories.length,
      };
    }
    case types.FETCH_SINGLE_CATEGORY: {
      const { category } = action.payload;
      return {
        ...state,
        category,
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
