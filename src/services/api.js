import axios from 'axios';
import { API_BASE_URL } from '@env';

// Axios için genel ayarlar
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 saniyelik bir zaman aşımı
});

// Ürünleri getir
export const getProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

// Ürün detaylarını getir
export const getProductDetails = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};



