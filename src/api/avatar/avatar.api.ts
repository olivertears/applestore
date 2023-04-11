import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { AvatarData, IAvatarApi } from './avatar.types';

const api = () => createApi(true, 'multipart/form-data');

class AvatarApi implements IAvatarApi {
  endpoint = 'users/photo' as const;

  @Catch
  addAvatar(avatarData: AvatarData): Promise<AxiosResponse<string>> {
    return api().post(this.endpoint, avatarData);
  }

  @Catch
  deleteAvatar(): Promise<AxiosResponse> {
    return api().delete(this.endpoint);
  }

  @Catch
  getAvatar(): Promise<AxiosResponse<string>> {
    return api().get(this.endpoint);
  }
}

export const avatarApi = new AvatarApi();
