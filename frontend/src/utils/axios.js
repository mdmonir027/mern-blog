import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9000/api',
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? token : '';
  console.log(token);
  return config;
});

export default instance;
