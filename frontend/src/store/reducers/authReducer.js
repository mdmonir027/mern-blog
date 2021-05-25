const init = {
  isAuthenticated: false,
  user: {},
  errors: {},
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case 1:
      return state;
    default:
      return state;
  }
};

export default authReducer;
