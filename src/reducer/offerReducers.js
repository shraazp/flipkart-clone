/**
 * reducer for storing offer
 * @author:Shravya P
 */
import OfferActionTypes from '../constants/offerActionTypes';

const intialState = {
  offers: {},
  isLogin: false,
};
// eslint-disable-next-line default-param-last
const offerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case OfferActionTypes.SET_OFFERS:

      return {
        ...state,
        offers: payload,
      };
    case OfferActionTypes.SET_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    default:
      return state;
  }
};
export default offerReducer;
