/**
 * Function to get all the addresses stored in database and connects to api.
 * @author:Shravya P
 */
import { getToken, getEmail } from '../utils/Common';

const axios = require('axios');
const qs = require('qs');

const token = getToken();
const email = getEmail();

export async function getAddresss() {
  const query = qs.stringify({
    filters: {
      Email: {
        $eq: email,
      },
    },
  }, {
    encodeValuesOnly: true,
  });
  try {
    const response = await axios.get(`http://localhost:1337/api/addresses?${query}`, {
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
export async function setAddresss(data) {
  try {
    const response = await axios.post('http://localhost:1337/api/addresses', data, {
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
export async function updateAddresss(data, id) {
  try {
    const response = await axios.put(`http://localhost:1337/api/addresses/${id}`, data, {
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
