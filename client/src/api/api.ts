// axios api
import axios from 'axios';
import { API_URL } from '../utils/constants';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCountries = async (qeury: string) => {
    const response = await api.get(`/countries/${qeury}`);
    console.log('api response : ',response.data);
    return response.data;
    };

export default api;