/**
 * reducer for storing offer
 * @author:Shravya P
 */
import ActionTypes from '../constants/ActionTypes';

const intialState = {
  deals: [],
  discounts: [],
  selections: [],
  isLogin: false,
  category: [],
};
// eslint-disable-next-line default-param-last
const CategoryReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DEALS:

      return {
        ...state,
        deals: payload,
      };
    case ActionTypes.SET_DISCOUNTS:

      return {
        ...state,
        discounts: payload,
      };
    case ActionTypes.SET_SELECTIONS:

      return {
        ...state,
        selections: payload,
      };
    case ActionTypes.SET_CATEGORY:

      return {
        ...state,
        category: payload,
      };
    case ActionTypes.SET_LOGIN:
      return {
        ...state,
<<<<<<< HEAD
        isLogin: payload,
=======
        isLogin: !state.isLogin,
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
      };
    default:
      return state;
  }
};
export default CategoryReducer;
