import { AxiosResponse } from 'axios';

export interface IPhotoApi {
  endpoint: 'products/photo';
  addPhoto: (addPhotoData: FormData) => Promise<AxiosResponse<string>>;
  deletePhoto: (deletePhotoData: DeletePhotoData) => Promise<AxiosResponse>;
}

export type DeletePhotoData = {
  photoPath: string;
  productId: string;
};
