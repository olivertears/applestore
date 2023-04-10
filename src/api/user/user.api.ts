import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IUser } from '../../interfaces';
import { ChangePasswordData, IUserApi, UpdateUserData } from './user.types';

const api = createApi(true);

class UserApi implements IUserApi {
  endpoint = 'users' as const;

  @Catch
  getUser(): Promise<AxiosResponse<IUser>> {
    return api.get(this.endpoint);
  }

  @Catch
  updateUser(updateUserData: UpdateUserData): Promise<AxiosResponse<IUser>> {
    return api.put(this.endpoint, updateUserData);
  }

  @Catch
  changePassword(changePasswordData: ChangePasswordData): Promise<AxiosResponse> {
    return api.put(this.endpoint + '/changePassword', changePasswordData);
  }
}

export const userApi = new UserApi();
