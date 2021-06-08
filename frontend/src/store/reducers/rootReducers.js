import { combineReducers } from 'redux';
import categoryReducer from './author/categoryReducer';
import postReducer from './author/postReducer';
import profileReducer from './author/profileReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  author: combineReducers({
    post: postReducer,
    category: categoryReducer,
    profile: profileReducer,
  }),
  public: {},
  loading: loadingReducer,
});

export default rootReducer;
