import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IAvatarApi } from './avatar.types';

const api = createApi(true, 'multipart/form-data');

class AvatarApi implements IAvatarApi {
  endpoint = 'users/avatar' as const;

  @Catch
  addAvatar(avatar: File): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint, avatar);
  }

  @Catch
  deleteAvatar(avatarName: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + avatarName);
  }

  @Catch
  updateAvatar(avatar: File): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint, avatar);
  }
}

export const avatarApi = new AvatarApi();
