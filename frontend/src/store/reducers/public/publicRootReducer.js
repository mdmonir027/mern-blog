import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';
import commentReducer from './CommentReducer';
import postReducer from './postReducer';

// public category Reducer.

const publicRootReducer = combineReducers({
  category: categoryReducer,
  post: postReducer,
  comments: commentReducer,
});

export default publicRootReducer;
