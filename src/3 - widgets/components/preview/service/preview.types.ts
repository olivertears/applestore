export interface IPreviewService {
  addPreview: (file: File, productId: string) => void;
  deletePreview: (photoPath: string, productId: string) => void;
}
