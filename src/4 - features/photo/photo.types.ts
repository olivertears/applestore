export interface PhotoProps {
  photo: string;
  addPhoto: (file: File) => Promise<void>;
  deletePhoto: () => Promise<void>;
}
