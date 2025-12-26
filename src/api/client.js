import axios from 'axios';

const BASE_URL = 'https://dev.codeleap.co.uk/careers/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});