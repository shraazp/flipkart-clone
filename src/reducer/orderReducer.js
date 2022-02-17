/* eslint-disable no-case-declarations */
/**
 * reducer for storing orders
 * @author:Shravya P
 */
import ActionTypes from '../constants/ActionTypes';

const intialState = {
  order: {},
};
// eslint-disable-next-line default-param-last
const orderReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ORDER:

      return {
        ...state,
        order: payload,
      };
    default:
      return state;
  }
};
export default orderReducer;
