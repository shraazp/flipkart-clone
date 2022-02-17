/**
* Actions for cart state
* @author:Shravya P
*/
import ActionTypes from '../constants/ActionTypes';

const setCart = (cart) => ({
  type: ActionTypes.SET_CART,
  payload: cart,
});
const addToCart = (cart) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: cart,
});
const updateCartQuantity = (cart) => ({
  type: ActionTypes.UPDATE_CART,
  payload: cart,
});
const deleteCartItem = (cartId) => ({
  type: ActionTypes.DELETE_CART,
  payload: cartId,
});
const setTotalCost = (cost) => ({
  type: ActionTypes.SET_TOTAL_COST,
  payload: cost,
});
const emptyCart = () => ({
  type: ActionTypes.SET_EMPTY_CART,
});
export {
  setCart, addToCart, updateCartQuantity, deleteCartItem, setTotalCost, emptyCart,
};
