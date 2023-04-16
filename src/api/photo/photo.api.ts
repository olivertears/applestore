import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IPhotoApi } from './photo.types';

const api = () => createApi(true, 'multipart/form-data');

class PhotoApi implements IPhotoApi {
  endpoint = 'products/photos' as const;

  @Catch
  addPhoto(photo: File): Promise<AxiosResponse<string>> {
    return api().post(this.endpoint, photo);
  }

  @Catch
  deletePhoto(photo: string): Promise<AxiosResponse> {
    return api().delete(this.endpoint + '/' + photo);
  }
}

export const photoApi = new PhotoApi();
