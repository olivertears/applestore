import { avatarApi, AvatarData } from '../../api/avatar';
import { IAvatarService } from './avatar.types';
import { action, makeObservable, observable } from 'mobx';
import { userService } from '../user';

class AvatarService implements IAvatarService {
  avatar$ = '';

  constructor() {
    makeObservable(this, {
      avatar$: observable,
      setAvatar: action
    });
  }

  setAvatar(avatar: string) {
    this.avatar$ = avatar;
  }

  async addAvatar(file: File) {
    const { data } = await avatarApi.addAvatar({ file });
    userService.setAvatar(data);
    await this.getAvatar();
  }

  async deleteAvatar(avatarName: string) {
    await avatarApi.deleteAvatar(avatarName);
    this.setAvatar('');
  }

  async getAvatar() {
    const { data } = await avatarApi.getAvatar();
    this.setAvatar(data);
  }

  async updateAvatar(avatarData: AvatarData) {
    const { data } = await avatarApi.updateAvatar(avatarData);
    this.setAvatar(data);
  }
}

export const avatarService = new AvatarService();
