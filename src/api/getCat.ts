import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com',
  headers: { 'Content-Type': 'application/json' },
});

export const getCat = () => {
  return axiosInstance.get('/v1/images/search?breed_id=beng');
};
