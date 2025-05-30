// src/api/axiosInstance.js
import axios from 'axios';

export const Api = 'http://193.46.198.101/';

export const axiosInstance = axios.create({
  baseURL: Api,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
