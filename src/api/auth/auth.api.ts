import { AxiosResponse } from 'axios';
import { IAuthApi, AuthenticateData, RegisterData } from './auth.types';
import { api } from '../api';

class AuthApi implements IAuthApi {
  endpoint = 'auth' as const;

  authenticate(authenticateData: AuthenticateData): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint + 'authenticate', authenticateData);
  }

  register(registerData: RegisterData): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint + 'register', registerData);
  }
}

export const authApi = new AuthApi();
