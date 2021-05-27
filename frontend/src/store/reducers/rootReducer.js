import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  post: postReducer,
});

export default rootReducer;
