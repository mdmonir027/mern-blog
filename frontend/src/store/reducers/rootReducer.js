import { combineReducers } from 'redux';
import authorReducer from './authorReducer';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  post: postReducer,
  author: authorReducer,
});

export default rootReducer;
