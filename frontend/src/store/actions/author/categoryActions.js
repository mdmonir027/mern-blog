import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const getAllCategories = () => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_CATEGORIES_LOADING);
  axios
    .get('/admin/category')
    .then((response) => {
      const categories = response.data;
      dispatch({
        type: types.SET_CATEGORIES,
        payload: { categories },
      });
      dispatchLoading(dispatch, false, types.SET_CATEGORIES_LOADING);
    })
    .catch((e) => {
      dispatch({
        type: types.SET_CATEGORIES_ERRORS,
        payload: {
          page: 'fetch',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false, types.SET_CATEGORIES_LOADING);
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

export const updateCategoryAction = (name, slug, callBack) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_CATEGORIES_LOADING);
  axios
    .put(`/admin/category/${slug}`, { name })
    .then((response) => {
      dispatch({
        type: types.UPDATE_CATEGORY,
        payload: { category: response.data },
      });
      callBack(true);
    })
    .catch((e) => {
      callBack(false);
      console.log(e);
      dispatch({
        type: types.SET_CATEGORIES_ERRORS,
        payload: {
          page: 'edit',
          errors: e.response.data,
        },
      });

      dispatchLoading(dispatch, false, types.SET_CATEGORIES_LOADING);
    });
};

export const deleteCategoryAction = (slug) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_CATEGORIES_LOADING);
  axios
    .delete(`/admin/category/${slug}`)
    .then(() => {
      dispatch({
        type: types.DELETE_CATEGORY,
        payload: { slug },
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: types.SET_CATEGORIES_ERRORS,
        payload: {
          page: 'other',
          errors: e.response.data,
        },
      });

      dispatchLoading(dispatch, false, types.SET_CATEGORIES_LOADING);
    });
};

export const statusChangeAction = (slug) => (dispatch) => {
  dispatchLoading(dispatch, true, types.SET_CATEGORIES_LOADING);
  axios
    .get(`/admin/category/status/${slug}`)
    .then((response) => {
      const { status } = response.data;
      console.log('status', status);

      dispatch({
        type: types.CATEGORY_STATUS,
        payload: { status, slug },
      });
      dispatchLoading(dispatch, false, types.SET_CATEGORIES_LOADING);
    })
    .catch((e) => {
      dispatch({
        type: types.SET_CATEGORIES_ERRORS,
        payload: {
          page: 'status',
          errors: e.response.data,
        },
      });
      dispatchLoading(dispatch, false, types.SET_CATEGORIES_LOADING);
    });
};
