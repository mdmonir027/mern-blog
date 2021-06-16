import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';

// public category Reducer.

const publicRootReducer = combineReducers({
  category: categoryReducer,
});

export default publicRootReducer;
