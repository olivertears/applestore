import { AxiosResponse } from 'axios';
import { publicApi } from '../index';
import { IAuthApi, AuthenticateData, RegisterData, AuthResponse } from './auth.types';

class AuthApi implements IAuthApi {
  endpoint = 'auth' as const;

  authenticate(authenticateData: AuthenticateData): Promise<AxiosResponse<AuthResponse>> {
    return publicApi.post(this.endpoint + '/authenticate', authenticateData);
  }

  register(registerData: RegisterData): Promise<AxiosResponse<AuthResponse>> {
    return publicApi.post(this.endpoint + '/register', registerData);
  }
}

export const authApi = new AuthApi();
