import { AxiosResponse } from 'axios';
import { IUser } from '../../interfaces';
import { api } from '../api';
import { ChangePasswordData, IUserApi, UpdateUserData } from './user.types';

class UserApi implements IUserApi {
  endpoint = 'users' as const;

  getUser(): Promise<AxiosResponse<IUser>> {
    return api.get(this.endpoint);
  }

  updateUser(updateUserData: UpdateUserData): Promise<AxiosResponse<IUser>> {
    return api.put(this.endpoint, updateUserData);
  }

  changePassword(changePasswordData: ChangePasswordData): Promise<AxiosResponse> {
    return api.post(this.endpoint, changePasswordData);
  }
}

export const userApi = new UserApi();
