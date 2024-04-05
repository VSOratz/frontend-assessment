// src/services/ListingService.js
import axios from 'axios';

const LISTINGS_API_URL =
  'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json';

const fetchListings = async () => {
  debugger
  try {
    const response = await axios.get(LISTINGS_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error; // Lança o erro para ser tratado onde a função for chamada
  }
};

export default fetchListings;


//I HAD CORS PROBLEM!