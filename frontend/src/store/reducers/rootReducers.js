import { combineReducers } from 'redux';
import categoryReducer from './author/categoryReducer';
import postReducer from './author/postReducer';
import profileReducer from './author/profileReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import publicRootReducer from './public/publicRootReducer';

// public category Reducer.

const rootReducer = combineReducers({
  auth: authReducer,
  author: combineReducers({
    post: postReducer,
    category: categoryReducer,
    profile: profileReducer,
  }),
  public: publicRootReducer,
  loading: loadingReducer,
});

export default rootReducer;
