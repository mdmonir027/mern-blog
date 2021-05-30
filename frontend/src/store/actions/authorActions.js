import axios from '../utils/axios';
import * as types from './types';

const setAuthorLoading = (dispatch, loading) => {
  dispatch({ type: types.SET_CATEGORY_LOADING, payload: { loading } });
};

export const setAllAuthor = () => (dispatch) => {
  setAuthorLoading(dispatch, true);
  axios
    .get('/u/users')
    .then((response) => {
      dispatch({
        type: types.SET_AUTHORS,
        payload: { authors: response.data },
      });
    })
    .catch((e) => console.log(e));
};
