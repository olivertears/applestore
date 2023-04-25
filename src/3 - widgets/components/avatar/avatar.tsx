import { ChangeEventHandler, FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { userService } from '@entities/user/service';
import { CloseIcon } from '@shared/icons';
import { Loader, Skeleton } from '@shared/ui';
import { avatarService } from './service';
import * as S from './avatar.styles';

export const Avatar: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  const onAvatarChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      setIsLoading(true);
      avatarService.addAvatar(event.target.files[0]).finally(() => setIsLoading(false));
    }
  };

  const onAvatarDelete = () => {
    setIsLoading(true);
    avatarService.deleteAvatar().finally(() => setIsLoading(false));
  };

  return (
    <Skeleton>
      <S.Wrap avatar={userService.user$?.avatar}>
        {isLoading && <Loader />}
        <S.Label htmlFor="avatar" />
        <S.Input type="file" id="avatar" onChange={onAvatarChange} />
        {!isLoading && userService.user$?.avatar !== 'default_path.jpg' && (
          <CloseIcon onClick={onAvatarDelete} />
        )}
      </S.Wrap>
    </Skeleton>
  );
});
