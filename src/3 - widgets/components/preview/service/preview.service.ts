import { productService } from '@entities/product/service';
import { previewApi } from '../api';
import { IPreviewService } from './preview.types';

class PreviewService implements IPreviewService {
  async addPreview(file: File, productId: string) {
    const request = new Blob([JSON.stringify({ productId })], {
      type: 'application/json'
    });
    const addPreviewData = new FormData();
    addPreviewData.append('file', file);
    addPreviewData.append('request', request);

    const { data } = await previewApi.addPreview(addPreviewData);
    productService.setProducts(
      productService.products$.map((product) =>
        product.id === productId ? { ...product, preview: data } : product
      )
    );
  }

  async deletePreview(photoPath: string, productId: string) {
    await previewApi.deletePreview({ photoPath, productId });
    productService.setProducts(
      productService.products$.map((product) =>
        product.id === productId ? { ...product, preview: '' } : product
      )
    );
  }
}

export const previewService = new PreviewService();
