import ActionTypes from '../constants/ActionTypes';

const setAddress = (address) => ({
  type: ActionTypes.SET_ADDRESS,
  payload: address,
});
export default setAddress;
