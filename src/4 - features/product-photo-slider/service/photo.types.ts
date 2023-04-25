export interface IPhotoService {
  addPhoto: (file: File, productId: string, productColor: string) => void;
  deletePhoto: (photoPath: string, productId: string) => void;
}
