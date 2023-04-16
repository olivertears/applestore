import { photoApi } from '../../api/photo';
import { IPhotoService } from './photo.types';

class PhotoService implements IPhotoService {
  async addPhoto(file: File) {
    const { data } = await photoApi.addPhoto(file);
  }

  async deletePhoto(photo: string) {
    await photoApi.deletePhoto(photo);
  }
}

export const photoService = new PhotoService();
