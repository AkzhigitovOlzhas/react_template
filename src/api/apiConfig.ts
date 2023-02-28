import axios from 'axios';
import { LS_ACCESS_TOKEN } from '@constants/localStorage';

const projectApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

projectApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LS_ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

projectApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export { projectApi };
