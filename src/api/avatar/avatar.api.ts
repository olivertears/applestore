import { AxiosResponse } from 'axios';
import { privateApi, uploadPhotoApi } from '@shared/constants/api';
import { AvatarData, IAvatarApi } from './avatar.types';

class AvatarApi implements IAvatarApi {
  endpoint = 'users/photo' as const;

  addAvatar(avatarData: AvatarData): Promise<AxiosResponse<string>> {
    return uploadPhotoApi.post(this.endpoint, avatarData);
  }

  deleteAvatar(): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint);
  }
}

export const avatarApi = new AvatarApi();
