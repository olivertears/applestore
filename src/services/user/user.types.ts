import { IUser } from '../../interfaces';
import { ChangePasswordData, UpdateUserData } from '@entities/user/api';

export interface IUserService {
  user$: IUser | null;
  getUser: () => void;
  updateUser: (updateUserData: UpdateUserData) => void;
  changePassword: (changePasswordData: ChangePasswordData) => void;
  logout: () => void;
}
