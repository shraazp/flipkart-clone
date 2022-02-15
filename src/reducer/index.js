/**
to combine all the reducers
@author:Shravya P
*/
import { combineReducers } from 'redux';
import CategoryReducer from './categoryReducers';
import productReducer from './productReducers';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';

const reducers = combineReducers({
  allCategories: CategoryReducer,
  allProducts: productReducer,
  allCarts: cartReducer,
  allAddress: addressReducer,
});
export default reducers;
