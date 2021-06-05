import { combineReducers } from 'redux';
import categoryReducer from './author/categoryReducer';
import postReducer from './author/postReducer';
import profileReducer from './author/profileReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  author: combineReducers({
    post: postReducer,
    category: categoryReducer,
    profile: profileReducer,
  }),
  public: {},
});

export default rootReducer;
