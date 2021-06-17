import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';
import postReducer from './postReducer';

// public category Reducer.

const publicRootReducer = combineReducers({
  category: categoryReducer,
  post: postReducer,
});

export default publicRootReducer;
