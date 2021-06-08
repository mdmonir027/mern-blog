import { SET_LOADING } from '../store/actions/types';

const dispatchLoading = (dispatch, loading) => {
  dispatch({
    type: SET_LOADING,
    payload: { loading },
  });
};

export default dispatchLoading;
