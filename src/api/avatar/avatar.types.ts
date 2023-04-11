import { AxiosResponse } from 'axios';

export interface IAvatarApi {
  endpoint: 'users/photo';
  addAvatar: (avatar: AvatarData) => Promise<AxiosResponse<string>>;
  deleteAvatar: () => Promise<AxiosResponse>;
  getAvatar: () => Promise<AxiosResponse<string>>;
}

export type AvatarData = {
  file: File;
};
