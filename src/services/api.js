
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProductDetails = async (id) => {
  //console.log(`${API_URL}/products/${id}`);
  const response = await axios.get(`${API_URL}/products/${id}`);
  
  
  return response.data;
};
