import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { Photo } from '@features/photo';
import { userService } from '@entities/user/service';
import { avatarService } from './service';

export const Avatar: FC = observer(() => {
  return (
    <Photo
      photo={'users/photo/' + userService.user$?.avatar}
      addPhoto={avatarService.addAvatar}
      deletePhoto={avatarService.deleteAvatar}
    />
  );
});
