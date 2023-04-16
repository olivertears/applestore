import { AxiosResponse } from 'axios';

export interface IPhotoApi {
  endpoint: 'products/photos';
  addPhoto: (photo: File) => Promise<AxiosResponse<string>>;
  deletePhoto: (photo: string) => Promise<AxiosResponse>;
}
