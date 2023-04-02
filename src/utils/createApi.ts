import axios, { AxiosHeaders, AxiosInstance } from 'axios';
import { authService } from '../services/auth';

export const createApi = (withToken?: boolean, contentType?: string): AxiosInstance => {
  const headers: Partial<AxiosHeaders> = {};
  if (withToken) {
    headers['Authorization'] = `Bearer ${authService.token$}`;
  }
  if (contentType) {
    headers['content-type'] = contentType;
  }

  return axios.create({ baseURL: 'http://localhost:8081/', headers });
};
