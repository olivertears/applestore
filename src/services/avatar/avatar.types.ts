import { AvatarData } from '../../api/avatar';

export interface IAvatarService {
  avatar$: string;
  addAvatar: (file: File) => void;
  deleteAvatar: (avatarName: string) => void;
  getAvatar: () => void;
  updateAvatar: (avatarData: AvatarData) => void;
}
