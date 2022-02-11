/**
* Actions for offer state
* @author:Shravya P
*/
import ActionTypes from '../constants/ActionTypes';

const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});
<<<<<<< HEAD
const setSingleProduct = (product) => ({
  type: ActionTypes.SET_PRODUCT,
  payload: product,
});
export { setProducts, setSingleProduct };
=======
export default setProducts;
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
