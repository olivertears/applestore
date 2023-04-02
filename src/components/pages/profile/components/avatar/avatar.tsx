import { ChangeEventHandler, FC } from 'react';
import * as S from './avatar.styles';
import { userService } from '../../../../../services/user';
import { Skeleton } from '../../../../ui';
import { avatarService } from '../../../../../services/avatar';

export const Avatar: FC = () => {
  const submit: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      userService.user$?.avatar
        ? avatarService.updateAvatar(event.target.files[0])
        : avatarService.addAvatar(event.target.files[0]);
    }
  };

  return (
    <Skeleton>
      <S.Wrap avatar={userService.user$?.avatar || ''}>
        <S.Label htmlFor="avatar" />
        <S.Input type="file" id="avatar" onChange={submit} />
      </S.Wrap>
    </Skeleton>
  );
};
