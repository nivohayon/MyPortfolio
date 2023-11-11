import axios from 'axios';

export const baseURL = import.meta.env.DEV
  ? 'http://localhost:8080/'
  : 'https://my-portfolio-server-theta-one.vercel.app/';

export const apiInstance = axios.create({ baseURL });
