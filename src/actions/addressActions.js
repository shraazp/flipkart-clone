/**
* Actions for address states
* @author:Shravya P
*/
import ActionTypes from '../constants/ActionTypes';

const setDeliveryAddress = (address) => ({
  type: ActionTypes.SET_ADDRESS,
  payload: address,
});
export default setDeliveryAddress;
