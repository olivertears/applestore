import { AxiosResponse } from 'axios';
import { AuthenticateData, AuthResponse, RegisterData } from '../types';

export interface IAuthApi {
  endpoint: 'auth';
  authenticate: (authenticateData: AuthenticateData) => Promise<AxiosResponse<AuthResponse>>;
  register: (registerData: RegisterData) => Promise<AxiosResponse<AuthResponse>>;
}
