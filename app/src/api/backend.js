import axios from 'axios';

export const backendApi = axios.create({
  baseURL: '/api/',
});
