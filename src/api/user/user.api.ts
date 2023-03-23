import { AxiosResponse } from 'axios';
import { IUser } from '../../interfaces';
import { api } from '../api';
import { IUserApi, UpdateUserData } from './user.types';

class UserApi implements IUserApi {
  endpoint = 'users' as const;

  getUser(): Promise<AxiosResponse<IUser>> {
    return api.get(this.endpoint);
  }

  getUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.get(this.endpoint);
  }

  updateUser(user: UpdateUserData): Promise<AxiosResponse<IUser>> {
    return api.put(this.endpoint, user);
  }
}

export const userApi = new UserApi();
