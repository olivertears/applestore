export interface IAvatarService {
  addAvatar: (avatar: File) => void;
  deleteAvatar: (avatarName: string) => void;
  getAvatar: () => Promise<string>;
  updateAvatar: (avatar: File) => void;
}
