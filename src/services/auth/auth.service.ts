import { action, makeObservable, observable } from 'mobx';
import { Catch } from '../../utils';
import { authApi, AuthenticateData, RegisterData } from '../../api/auth';
import { IAuthService } from './auth.types';

class AuthService implements IAuthService {
  token$ = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || '') : '';

  constructor() {
    makeObservable(this, {
      token$: observable,
      setToken: action
    });
  }

  setToken(token: string) {
    this.token$ = token;
    localStorage.setItem('token', JSON.stringify(token));
  }

  @Catch
  async authenticate(authenticateData: AuthenticateData) {
    const res = await authApi.authenticate(authenticateData);
    this.setToken(res.data);
  }

  @Catch
  async register(registerData: RegisterData) {
    const res = await authApi.register(registerData);
    this.setToken(res.data);
  }
}

export const authService = new AuthService();
