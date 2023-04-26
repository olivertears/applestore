import { AxiosResponse } from 'axios';
import { privateApi, uploadPhotoApi } from '@shared/constants/api';
import { IPreviewApi } from './preview.types';
import { DeletePreviewData } from '../types';

class PreviewApi implements IPreviewApi {
  endpoint = 'products/photo/preview' as const;

  addPreview(previewData: FormData): Promise<AxiosResponse<string>> {
    return uploadPhotoApi.post(this.endpoint, previewData);
  }

  deletePreview(deletePreviewData: DeletePreviewData): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint, { data: deletePreviewData });
  }
}

export const previewApi = new PreviewApi();
