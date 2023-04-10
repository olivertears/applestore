import { action, makeObservable, observable } from 'mobx';
import { IUser } from '../../interfaces';
import { ChangePasswordData, UpdateUserData, userApi } from '../../api/user';
import { IUserService } from './user.types';
import { authService } from '../auth';

class UserService implements IUserService {
  user$: IUser | null = null;

  constructor() {
    makeObservable(this, {
      user$: observable,
      setUser: action,
      setAvatar: action
    });
  }

  setUser(user: IUser | null) {
    this.user$ = user;
  }

  setAvatar(avatar?: string) {
    this.user$ = { ...this.user$, avatar } as IUser;
  }

  async getUser() {
    const { data } = await userApi.getUser();
    this.setUser(data);
  }

  async updateUser(updateUserData: UpdateUserData) {
    const { data } = await userApi.updateUser(updateUserData);
    this.setUser(data);
  }

  async changePassword(changePasswordData: ChangePasswordData) {
    await userApi.changePassword(changePasswordData);
  }

  logout() {
    authService.setToken('');
    localStorage.removeItem('token');
    this.setUser(null);
  }
}

export const userService = new UserService();
