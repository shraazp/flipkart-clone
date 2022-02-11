/**
 * reducer for storing products
 * @author:Shravya P
 */
import ActionTypes from '../constants/ActionTypes';

const intialState = {
  products: [],
  singleProduct: {},
};
// eslint-disable-next-line default-param-last
const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:

      return {
        ...state,
        products: payload,
      };
    case ActionTypes.SET_PRODUCT:

      return {
        ...state,
        singleProduct: payload,
      };
    default:
      return state;
  }
};
export default productReducer;
