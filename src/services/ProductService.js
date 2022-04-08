/**
 * Function to get all the products stored in database and connects to api.
 * @author:Shravya P
 */
const axios = require('axios');
const qs = require('qs');

export default async function getAllProducts(catId) {
  const query = qs.stringify({
    filters: {
      categoryId: {
        $eq: catId,
      },
    },
  }, {
    encodeValuesOnly: true,
  });
  try {
    const response = await axios.get(`https://flipkart-backend-strapi.herokuapp.com/api/products?${query}`);
    return response.data.data;
  } catch (error) {
    return [];
  }
}
