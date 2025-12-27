import axios from 'axios';
import { mockAPI } from '../mock/posts.mock';


const BASE_URL = import.meta.env.VITE_API_URL
export const USE_MOCK = !BASE_URL;

export const apiClient = USE_MOCK
  ? mockAPI
  : axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});