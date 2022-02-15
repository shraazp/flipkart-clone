/**
 * Function to get all the products stored in database and connects to api.
 * @author:Shravya P
 */
import { getToken } from '../utils/Common';

const axios = require('axios');

const token = getToken();

export async function getCart() {
  try {
    const response = await axios.get('http://localhost:1337/api/carts', {
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
export async function setCart(data) {
  try {
    const response = await axios.post('http://localhost:1337/api/carts', data, {
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
export async function updateCart(data, id) {
  try {
    const response = await axios.put(`http://localhost:1337/api/carts/${id}`, data, {
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
export async function deleteCart(id) {
  try {
    const response = await axios.delete(`http://localhost:1337/api/carts/${id}`, {
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
