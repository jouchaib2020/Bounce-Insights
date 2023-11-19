// axios api
import axios from 'axios';
import { API_URL } from '../constants';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCountries = async () => {
    const response = await api.get('/countries');
    return response.data;
    };

export default api;