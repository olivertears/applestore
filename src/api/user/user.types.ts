import { AxiosResponse } from 'axios';
import { IUser } from '../../interfaces';

export interface IUserApi {
  endpoint: 'users';
  getUser: () => Promise<AxiosResponse<IUser>>;
  updateUser: (updateUserData: UpdateUserData) => Promise<AxiosResponse<IUser>>;
  changePassword: (changePasswordData: ChangePasswordData) => Promise<AxiosResponse>;
}

export type UpdateUserData = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};

export type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
};
