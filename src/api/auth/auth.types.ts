import { AxiosResponse } from 'axios';
import { IUser } from '../../interfaces';

export interface IAuthApi {
  endpoint: 'auth';
  authenticate: (authenticateData: AuthenticateData) => Promise<AxiosResponse<AuthResponse>>;
  register: (registerData: RegisterData) => Promise<AxiosResponse<AuthResponse>>;
}

export type AuthResponse = {
  token: string;
  userResponse: IUser;
};

export type AuthenticateData = {
  email: string;
  password: string;
};

export type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
