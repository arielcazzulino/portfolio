import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.REACT_APP_API_TOKEN

const api = axios.create({
  baseURL: 'https://afc.com.ar/wp-json/wp/v2',
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;