/* eslint-disable no-case-declarations */
/**
 * reducer for storing cart details
 * @author:Shravya P
 */
import ActionTypes from '../constants/ActionTypes';

const intialState = {
  cart: [],
  totalCost: 0,
};
// eslint-disable-next-line default-param-last
const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:

      return {
        ...state,
        cart: payload,
      };
    case ActionTypes.ADD_TO_CART:

      return {
        ...state,
        cart: [
          ...state.cart,
          payload,
        ],
      };
    case ActionTypes.UPDATE_CART:

      const newCart = [...state.cart];
      const index = state.cart.findIndex((carts) => carts.id === payload.id);
      newCart[index] = payload;

      return {
        ...state,
        cart: newCart,
      };
    case ActionTypes.DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case ActionTypes.SET_TOTAL_COST:

      return {
        ...state,
        totalCost: payload,
      };
    case ActionTypes.SET_EMPTY_CART:

      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
