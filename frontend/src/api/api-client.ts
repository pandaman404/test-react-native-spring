import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8080/api/v1';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
