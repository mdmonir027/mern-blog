import * as types from '../../actions/types';

const init = {
  categories: [],
  error: {
    page: null,
    errors: {},
  },
  loading: false,
};

const categoryReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      const { categories } = action.payload;
      return {
        ...state,
        categories,
        error: {
          page: null,
          errors: {},
        },
      };
    case types.SET_CATEGORIES_LOADING:
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    case types.SET_CATEGORIES_ERRORS:
      const { errors, page } = action.payload;
      return {
        ...state,
        error: {
          page,
          errors,
        },
      };
    case types.ADD_CATEGORY:
      const { category } = action.payload;
      return {
        categories: [...state.categories, category],
        error: {
          page: null,
          errors: {},
        },
        loading: false,
      };

    default:
      return state;
  }
};

export default categoryReducer;
