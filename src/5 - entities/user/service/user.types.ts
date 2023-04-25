import { ChangePasswordData, IUser, UpdateUserData } from '../types';

export interface IUserService {
  user$: IUser | null;
  getUser: () => void;
  updateUser: (updateUserData: UpdateUserData) => void;
  changePassword: (changePasswordData: ChangePasswordData) => void;
  logout: () => void;
}
