import { AxiosResponse } from 'axios';

export interface IAvatarApi {
  endpoint: 'users/avatar';
  addAvatar: (avatar: File) => Promise<AxiosResponse<string>>;
  deleteAvatar: (avatarName: string) => Promise<AxiosResponse>;
  updateAvatar: (avatar: File) => Promise<AxiosResponse<string>>;
}
