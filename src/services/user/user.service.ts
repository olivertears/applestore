import { action, makeObservable, observable } from 'mobx';
import { Catch } from '../../utils';
import { IUser } from '../../interfaces';
import { ChangePasswordData, UpdateUserData, userApi } from '../../api/user';
import { IUserService } from './user.types';

class UserService implements IUserService {
  user$: IUser | null = null;

  constructor() {
    makeObservable(this, {
      user$: observable,
      setUser: action
    });
  }

  setUser(user: IUser | null) {
    this.user$ = user;
  }

  @Catch
  async getUser() {
    const user = await userApi.getUser();
    this.setUser(user.data);
  }

  @Catch
  async updateUser(updateUserData: UpdateUserData) {
    const user = await userApi.updateUser(updateUserData);
    this.setUser(user.data);
  }

  @Catch
  async changePassword(changePasswordData: ChangePasswordData) {
    const res = await userApi.changePassword(changePasswordData);
  }
}

export const userService = new UserService();
