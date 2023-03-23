import { action, makeObservable, observable } from 'mobx';
import { IUserService } from './user.types';
import { IUser } from '../../interfaces/IUser';

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
}

export const userService = new UserService();
