/**
 * Function to get all the deals stored in database and connects to api.
 * @author:Shravya P
 */
const axios = require('axios');

export default async function getAllDeals() {
  try {
    const response = await axios.get('http://localhost:1337/api/offers/1');
    return response.data.data.attributes.deals;
  } catch (error) {
    return [];
  }
}
