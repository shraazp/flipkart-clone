/**
* Actions for offer state
* @author:Shravya P
*/
import ActionTypes from '../constants/ActionTypes';

const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});
const setSingleProduct = (product) => ({
  type: ActionTypes.SET_PRODUCT,
  payload: product,
});
export { setProducts, setSingleProduct };
