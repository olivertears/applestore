import { AxiosResponse } from 'axios';

export interface IAvatarApi {
  endpoint: 'users/photo';
  addAvatar: (avatar: AvatarData) => Promise<AxiosResponse<string>>;
  deleteAvatar: () => Promise<AxiosResponse>;
}

export type AvatarData = {
  file: File;
};
