import { photoApi } from '@widgets/components/product-photo-slider/api';
import { IPhotoService } from './photo.types';
import { productService } from '@entities/product/service';

class PhotoService implements IPhotoService {
  async addPhoto(file: File, productId: string, productColor: string) {
    const request = new Blob([JSON.stringify({ productId, productColor })], {
      type: 'application/json'
    });
    const addPhotoData = new FormData();
    addPhotoData.append('file', file);
    addPhotoData.append('request', request);

    const { data } = await photoApi.addPhoto(addPhotoData);

    productService.setProducts(
      productService.products$.map((product) =>
        product.id === productId
          ? {
              ...product,
              colors: product.colors.map((color) =>
                color.name === productColor ? { ...color, photos: [...color.photos, data] } : color
              )
            }
          : product
      )
    );
  }

  async deletePhoto(photoPath: string, productId: string) {
    await photoApi.deletePhoto({ photoPath, productId });

    productService.setProducts(
      productService.products$.map((product) =>
        product.id === productId
          ? {
              ...product,
              colors: product.colors.map((color) =>
                color.name === photoPath.split('/')[2]
                  ? { ...color, photos: color.photos.filter((photo) => photo !== photoPath) }
                  : color
              )
            }
          : product
      )
    );
  }
}

export const photoService = new PhotoService();
