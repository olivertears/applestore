import { AxiosResponse } from 'axios';

export interface IAvatarApi {
  endpoint: 'users/photo';
  addAvatar: (avatar: File) => Promise<AxiosResponse<string>>;
  deleteAvatar: (avatarName: string) => Promise<AxiosResponse>;
  getAvatar: () => Promise<AxiosResponse<string>>;
  updateAvatar: (avatar: File) => Promise<AxiosResponse<string>>;
}
