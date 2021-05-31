import axios from 'axios';
const token = localStorage.getItem('auth_token');
const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000/api/',
});

axiosInstance.defaults.headers.common['Authorization'] = token || '';

export default axiosInstance;
