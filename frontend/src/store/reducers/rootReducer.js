import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
});

export default rootReducer;
