import { ChangeEventHandler, FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loader, Skeleton } from '../../../../ui';
import { CloseIcon } from '../../../../ui/icons';
import { avatarService } from '../../../../../services/avatar';
import * as S from './avatar.styles';
import { userService } from '../../../../../services/user';

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
