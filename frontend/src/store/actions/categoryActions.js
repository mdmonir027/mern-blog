import axios from '../utils/axios';
import * as types from './types';

const setCategoryLoading = (dispatch, loading) => {
  dispatch({ type: types.SET_CATEGORY_LOADING, payload: { loading } });
};

export const setAllCategories = () => (dispatch) => {
  setCategoryLoading(dispatch, true);
  axios
    .get('/category')
    .then((response) => {
      const categories = response.data;
      dispatch({ type: types.SET_CATEGORIES, payload: { categories } });
      setCategoryLoading(dispatch, false);
    })
    .catch((e) => console.log(e.response));
};
