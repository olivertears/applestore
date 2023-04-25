import { userService } from '@entities/user/service';
import { avatarApi } from '../api';
import { IAvatarService } from './avatar.types';

class AvatarService implements IAvatarService {
  async addAvatar(file: File) {
    const { data } = await avatarApi.addAvatar({ file });
    userService.setAvatar(data);
  }

  async deleteAvatar() {
    await avatarApi.deleteAvatar();
    userService.setAvatar('default_path.jpg');
  }
}

export const avatarService = new AvatarService();
