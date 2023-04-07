import { avatarApi } from '../../api/avatar';
import { IUser } from '../../interfaces';
import { IAvatarService } from './avatar.types';
import { userService } from '../user';

class AvatarService implements IAvatarService {
  setAvatar(avatar?: string) {
    userService.setUser({ ...userService.user$, avatar } as IUser);
  }

  async addAvatar(avatar: File) {
    const { data } = await avatarApi.addAvatar(avatar);
    this.setAvatar(data);
  }

  async deleteAvatar(avatarName: string) {
    await avatarApi.deleteAvatar(avatarName);
    this.setAvatar();
  }

  async updateAvatar(avatar: File) {
    const { data } = await avatarApi.updateAvatar(avatar);
    this.setAvatar(data);
  }
}

export const avatarService = new AvatarService();
