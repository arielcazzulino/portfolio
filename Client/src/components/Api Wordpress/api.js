import axios from 'axios';

const api = axios.create({
  baseURL: 'https://afc.com.ar/wp-json/wp/v2',
});

api.interceptors.request.use((config) => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FmYy5jb20uYXIiLCJpYXQiOjE2NzcxMDAyMTEsIm5iZiI6MTY3NzEwMDIxMSwiZXhwIjoxNjc3NzA1MDExLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.zVl9Im_tQv9hfdKFS64dEO9OrOdNIwYZqArOcxL2teM';
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;