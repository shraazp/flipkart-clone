/**
 * reducer for storing addresses
 * @author:Shravya P
 */
import ActionTypes from '../constants/ActionTypes';

const intialState = {
  address: [],
};
// eslint-disable-next-line default-param-last
const addressReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ADDRESS:

      return {
        ...state,
        address: payload,
      };
    default:
      return state;
  }
};
export default addressReducer;
