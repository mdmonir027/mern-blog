import * as types from '../../actions/types';

const init = {
  categories: [],
  error: {
    page: null,
    errors: {},
  },
};

const categoryReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES: {
      const { categories } = action.payload;
      return {
        ...state,
        categories,
        error: {
          page: null,
          errors: {},
        },
      };
    }
    case types.SET_CATEGORIES_ERRORS: {
      const { errors, page } = action.payload;
      return {
        ...state,
        error: {
          page,
          errors,
        },
      };
    }
    case types.ADD_CATEGORY: {
      const { category } = action.payload;
      return {
        categories: [...state.categories, category],
        error: {
          page: null,
          errors: {},
        },
      };
    }
    case types.UPDATE_CATEGORY: {
      const { category } = action.payload;
      const oldCategories = [...state.categories];
      const newCategories = oldCategories.map((cat) => {
        if (cat._id === category._id) return category;
        return cat;
      });
      return {
        categories: newCategories,
        error: {
          page: null,
          errors: {},
        },
      };
    }
    case types.DELETE_CATEGORY: {
      const { slug } = action.payload;
      const oldCategories = [...state.categories];
      const newCategories = oldCategories.filter((cat) => cat.slug !== slug);
      return {
        categories: newCategories,
        error: {
          page: null,
          errors: {},
        },
      };
    }
    case types.CATEGORY_STATUS: {
      const { slug, status } = action.payload;
      const oldCategories = [...state.categories];
      const newCategories = oldCategories.map((cat) => {
        if (cat.slug === slug) {
          cat.status = status;
          return cat;
        }
        return cat;
      });
      return {
        categories: newCategories,
        error: {
          page: null,
          errors: {},
        },
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
