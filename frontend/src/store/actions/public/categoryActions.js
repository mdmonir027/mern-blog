import axios from '../../../utils/axios';
import dispatchLoading from '../../../utils/dispatchLoading';
import * as types from '../types';

export const fetchCategories = () => (dispatch) => {
  dispatchLoading(dispatch, true);
  axios
    .get('/category')
    .then((response) => {
      const categories = response.data;
      dispatch({
        type: types.FETCH_CATEGORIES,
        payload: { categories },
      });
      dispatchLoading(dispatch, false);
    })
    .catch((e) => {
      console.log(e);
      dispatchLoading(dispatch, false);
    });
};
