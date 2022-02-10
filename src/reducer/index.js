/**
to combine all the reducers
@author:Shravya P
*/
import { combineReducers } from 'redux';
import CategoryReducer from './categoryReducers';
import productReducer from './productReducers';

const reducers = combineReducers({
  allCategories: CategoryReducer,
  allProducts: productReducer,
});
export default reducers;
