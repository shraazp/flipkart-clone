/**
* Actions for order state
* @author:Shravya P
*/
import ActionTypes from '../constants/ActionTypes';

const setOrders = (order) => ({
  type: ActionTypes.SET_ORDER,
  payload: order,
});
export default setOrders;
