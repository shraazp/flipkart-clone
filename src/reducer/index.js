/**
to combine all the reducers
@author:Shravya P
*/
import { combineReducers } from 'redux';
import offerReducer from './offerReducers';

const reducers = combineReducers({
  allOffers: offerReducer,
});
export default reducers;
