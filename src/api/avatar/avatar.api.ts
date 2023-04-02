import { AxiosResponse } from 'axios';
import { createApi } from '../../utils/createApi';
import { IAvatarApi } from './avatar.types';

const api = createApi(true, 'multipart/form-data');

class AvatarApi implements IAvatarApi {
  endpoint = 'users/avatar' as const;

  addAvatar(avatar: File): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint, avatar);
  }

  deleteAvatar(avatarName: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + avatarName);
  }

  updateAvatar(avatar: File): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint, avatar);
  }
}

export const avatarApi = new AvatarApi();
