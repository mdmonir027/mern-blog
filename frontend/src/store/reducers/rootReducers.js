import { combineReducers } from 'redux';
import categoryReducer from './author/categoryReducer';
import postReducer from './author/postReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  author: combineReducers({
    post: postReducer,
    category: categoryReducer,
  }),
  public: {},
});

export default rootReducer;
