import axios from '../store/utils/axios';
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    axios.defaults.headers.common['Authorization'] = '';
  }
};

export default setAuthToken;
