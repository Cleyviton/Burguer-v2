import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://hamburgueria-kenzie-v2.herokuapp.com',
  timeout: 12000,
});
