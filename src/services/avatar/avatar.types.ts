export interface IAvatarService {
  addAvatar: (avatar: File) => void;
  deleteAvatar: (avatarName: string) => void;
  updateAvatar: (avatar: File) => void;
}
