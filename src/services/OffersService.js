/**
 * Function to get all the deals stored in database and connects to api.
 * @author:Shravya P
 */
const axios = require('axios');
const qs = require('qs');

export async function getAllDeals() {
  const query = qs.stringify({
    filters: {
      DealsOfTheDay: {
        $eq: true,
      },
    },
  }, {
    encodeValuesOnly: true,
  });
  try {
    const response = await axios.get(`https://flipkart-backend-strapi.herokuapp.com/api/categories?${query}`);
    return response.data.data;
  } catch (error) {
    return [];
  }
}
export async function getAllDiscounts() {
  const query = qs.stringify({
    filters: {
      DiscountsforYou: {
        $eq: true,
      },
    },
  }, {
    encodeValuesOnly: true,
  });
  try {
    const response = await axios.get(`https://flipkart-backend-strapi.herokuapp.com/api/categories?${query}`);
    return response.data.data;
  } catch (error) {
    return [];
  }
}
export async function getAllSelection() {
  const query = qs.stringify({
    filters: {
      TopSelection: {
        $eq: true,
      },
    },
  }, {
    encodeValuesOnly: true,
  });
  try {
    const response = await axios.get(`https://flipkart-backend-strapi.herokuapp.com/api/categories?${query}`);
    return response.data.data;
  } catch (error) {
    return [];
  }
}
