import { AxiosResponse } from 'axios';
import { DeletePreviewData } from '../types';

export interface IPreviewApi {
  endpoint: 'products/photo/preview';
  addPreview: (avatar: FormData) => Promise<AxiosResponse<string>>;
  deletePreview: (deletePreviewData: DeletePreviewData) => Promise<AxiosResponse>;
}
