/**
 * reducer for storing products
 * @author:Shravya P
 */
import ActionTypes from '../constants/ActionTypes';

const intialState = {
  products: [],
<<<<<<< HEAD
  singleProduct: {},
=======
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
};
// eslint-disable-next-line default-param-last
const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:

      return {
        ...state,
        products: payload,
      };
<<<<<<< HEAD
    case ActionTypes.SET_PRODUCT:

      return {
        ...state,
        singleProduct: payload,
      };
=======
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
    default:
      return state;
  }
};
export default productReducer;
