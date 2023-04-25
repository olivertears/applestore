import { AxiosResponse } from 'axios';
import { ChangePasswordData, IUser, UpdateUserData } from '../types';

export interface IUserApi {
  endpoint: 'users';
  getUser: () => Promise<AxiosResponse<IUser>>;
  updateUser: (updateUserData: UpdateUserData) => Promise<AxiosResponse<IUser>>;
  changePassword: (changePasswordData: ChangePasswordData) => Promise<AxiosResponse>;
}
