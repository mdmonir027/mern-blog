import { combineReducers } from 'redux';
import categoryReducer from './author/categoryReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  author: combineReducers({
    category: categoryReducer,
  }),
  public: {},
});

export default rootReducer;
