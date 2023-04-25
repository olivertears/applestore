import { AxiosResponse } from 'axios';
import { privateApi, uploadPhotoApi } from '@shared/constants/api';
import { DeletePhotoData } from '../types';
import { IPhotoApi } from './photo.types';

class PhotoApi implements IPhotoApi {
  endpoint = 'products/photo' as const;

  addPhoto(addPhotoData: FormData): Promise<AxiosResponse<string>> {
    return uploadPhotoApi.post(this.endpoint, addPhotoData);
  }

  deletePhoto(deletePhotoData: DeletePhotoData): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint, {
      data: deletePhotoData
    });
  }
}

export const photoApi = new PhotoApi();
