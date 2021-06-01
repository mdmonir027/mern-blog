import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const getAllCategories = () => (dispatch) => {
  axios
    .get('/author/category')
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      dispatch({
        type: types.SET_CATEGORIES_ERRORS,
        payload: {
          page: 'fetch',
          errors: e.response.data,
        },
      });
    });
};

export const addCategory = (name, history, path) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_CATEGORIES_LOADING);
  axios
    .post('/admin/category', { name })
    .then((response) => {
      dispatch({
        type: types.ADD_CATEGORY,
        payload: { category: response.data },
      });
      history.push(path);
    })
    .catch((e) => {
      dispatch({
        type: types.SET_CATEGORIES_ERRORS,
        payload: {
          page: 'add',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false, types.SET_CATEGORIES_LOADING);
    });
};
