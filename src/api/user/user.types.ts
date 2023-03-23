import { AxiosResponse } from 'axios';
import { IUser } from '../../interfaces';

export interface IUserApi {
  endpoint: 'users';
  getUser: () => Promise<AxiosResponse<IUser>>;
  getUsers: () => Promise<AxiosResponse<IUser[]>>;
  updateUser: (user: UpdateUserData) => Promise<AxiosResponse<IUser>>;
}

export type UpdateUserData = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};
