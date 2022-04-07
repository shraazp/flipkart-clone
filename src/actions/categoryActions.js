/**
* Actions for category state
* @author:Shravya P
*/
import ActionTypes from '../constants/ActionTypes';

export const setDeals = (categories) => ({
  type: ActionTypes.SET_DEALS,
  payload: categories,
});
export const setDiscount = (categories) => ({
  type: ActionTypes.SET_DISCOUNTS,
  payload: categories,
});
export const setSelection = (categories) => ({
  type: ActionTypes.SET_SELECTIONS,
  payload: categories,
});
export const setCategory = (category) => ({
  type: ActionTypes.SET_CATEGORY,
  payload: category,
});
export const loginStatus = (flag) => ({
  type: ActionTypes.SET_LOGIN,
  payload: flag,
});
