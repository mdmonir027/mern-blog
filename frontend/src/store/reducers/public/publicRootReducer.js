import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';
import postReducer from './postReducer';

// public category Reducer.

const publicRootReducer = combineReducers({
  category: categoryReducer,
  posts: postReducer,
});

export default publicRootReducer;
