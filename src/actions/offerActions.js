/**
* Actions for offer state
* @author:Shravya P
*/
import OfferActionTypes from '../constants/offerActionTypes';

export const setOffers = (offers) => ({
  type: OfferActionTypes.SET_OFFERS,
  payload: offers,
});
export const loginStatus = (flag) => ({
  type: OfferActionTypes.SET_LOGIN,
  payload: flag,
});
