/**
 * reducer for storing products
 * @author:Shravya P
 */
import ActionTypes from '../constants/ActionTypes';

const intialState = {
  products: [],
};
// eslint-disable-next-line default-param-last
const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:

      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export default productReducer;
