import { photoApi } from '../../api/photo';
import { IPhotoService } from './photo.types';

class PhotoService implements IPhotoService {
  async addPhoto(file: File) {
    const { data } = await photoApi.addPhoto(file);

    // const fullPath = iphone/iphone-12/red/1.png
    // GET product/photos/{fullPath}
  }

  async deletePhoto(photo: string) {
    await photoApi.deletePhoto(photo);
  }
}

export const photoService = new PhotoService();
