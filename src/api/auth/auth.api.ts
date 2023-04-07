import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IAuthApi, AuthenticateData, RegisterData } from './auth.types';

const api = createApi();

class AuthApi implements IAuthApi {
  endpoint = 'auth' as const;

  @Catch
  authenticate(authenticateData: AuthenticateData): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint + '/authenticate', authenticateData);
  }

  @Catch
  register(registerData: RegisterData): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint + '/register', registerData);
  }
}

export const authApi = new AuthApi();
