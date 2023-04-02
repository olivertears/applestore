import { avatarApi } from '../../api/avatar';
import { Catch } from '../../utils';
import { IUser } from '../../interfaces';
import { IAvatarService } from './avatar.types';
import { userService } from '../user';

class AvatarService implements IAvatarService {
  setAvatar(avatar?: string) {
    userService.setUser({ ...userService.user$, avatar } as IUser);
  }

  @Catch
  async addAvatar(avatar: File) {
    const avatarName = await avatarApi.addAvatar(avatar);
    this.setAvatar(avatarName.data);
  }

  @Catch
  async deleteAvatar(avatarName: string) {
    await avatarApi.deleteAvatar(avatarName);
    this.setAvatar();
  }

  @Catch
  async updateAvatar(avatar: File) {
    const avatarName = await avatarApi.updateAvatar(avatar);
    this.setAvatar(avatarName.data);
  }
}

export const avatarService = new AvatarService();
