export interface IAvatarService {
  avatar$: string;
  addAvatar: (file: File) => void;
  deleteAvatar: () => void;
  getAvatar: () => void;
}
