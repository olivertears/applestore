import { action, makeObservable, observable } from 'mobx';
import { authApi } from '@features/auth/api';
import { AuthenticateData, RegisterData } from '@features/auth/types';
import { userService } from '@entities/user/service';
import { getFromLocalStorage } from '@shared/utils';
import { IAuthService } from './auth.types';

class AuthService implements IAuthService {
  token$ = getFromLocalStorage('token') || '';

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

  async authenticate(authenticateData: AuthenticateData) {
    const { data } = await authApi.authenticate(authenticateData);
    this.setToken(data.token);
    userService.setUser(data.userResponse);
  }

  async register(registerData: RegisterData) {
    const { data } = await authApi.register(registerData);
    this.setToken(data.token);
    userService.setUser(data.userResponse);
  }
}

export const authService = new AuthService();
