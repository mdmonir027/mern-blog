const dispatchLoading = (dispatch, loading, type) => {
  dispatch({
    type: type,
    payload: { loading },
  });
};

export default dispatchLoading;
