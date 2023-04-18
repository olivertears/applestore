export interface IPhotoService {
  addPhoto: (photo: File) => void;
  deletePhoto: (photo: string) => void;
}
