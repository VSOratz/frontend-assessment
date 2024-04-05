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
    throw error;
  }
};

export default fetchListings;


//I HAD CORS PROBLEM!