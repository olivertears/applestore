import { AxiosResponse } from 'axios';
import { DeletePhotoData } from '../types';

export interface IPhotoApi {
  endpoint: 'products/photo';
  addPhoto: (addPhotoData: FormData) => Promise<AxiosResponse<string>>;
  deletePhoto: (deletePhotoData: DeletePhotoData) => Promise<AxiosResponse>;
}
