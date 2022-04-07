/**
 * Function to get all the orders stored in database and connects to api.
 * @author:Shravya P
 */
import { getToken } from '../utils/Common';

const axios = require('axios');

const token = getToken();

export async function getOrder() {
  try {
    const response = await axios.get('http://localhost:1337/api/orders', {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}
export async function setOrder(data) {
  try {
    const response = await axios.post('http://localhost:1337/api/orders', data, {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}
