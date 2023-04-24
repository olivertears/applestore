import axios, { AxiosInstance } from 'axios';
import { getFromLocalStorage } from '../utils';
import { errorService } from '@entities/error/service';
import { IError } from '../../interfaces';

const createApi = (): AxiosInstance => axios.create({ baseURL: 'http://localhost:8081/' });

export const publicApi = createApi();
publicApi.interceptors.response.use(
  (response) => response,
  (error) => {
    errorService.addError(error.response?.data as IError);
    throw Error(error.response?.data?.message);
  }
);

export const privateApi = createApi();
privateApi.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${getFromLocalStorage('token')}`);
  return config;
});
privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    errorService.addError(error.response?.data as IError);
    throw Error(error.response?.data?.message);
  }
);

export const uploadPhotoApi = createApi();
uploadPhotoApi.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${getFromLocalStorage('token')}`);
  config.headers.setContentType('multipart/form-data');
  return config;
});
uploadPhotoApi.interceptors.response.use(
  (response) => response,
  (error) => {
    errorService.addError(error.response?.data as IError);
    throw Error(error.response?.data?.message);
  }
);
