import { AxiosResponse } from 'axios';
import { createApi } from '../../utils/createApi';
import { IUser } from '../../interfaces';
import { ChangePasswordData, IUserApi, UpdateUserData } from './user.types';

const api = createApi(true);

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
