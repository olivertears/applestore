import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import * as S from './avatar.styles';
import { userService } from '../../../../../services/user';
import { Skeleton } from '../../../../ui';
import { avatarService } from '../../../../../services/avatar';
import { observer } from 'mobx-react-lite';
import { avatarApi } from '../../../../../api/avatar';
import { authService } from '../../../../../services/auth';

export const Avatar: FC = observer(() => {
  const submit: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      userService.user$?.avatar
        ? avatarService.updateAvatar(event.target.files[0])
        : avatarService.addAvatar(event.target.files[0]);
    }
  };

  const [res, serRes] = useState('');
  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const { data } = await avatarApi.getAvatar();
    serRes(data);
  };

  return (
    <Skeleton>
      <S.Wrap avatar={res}>
        <S.Label htmlFor="avatar" />
        <S.Input type="file" id="avatar" onChange={submit} />
      </S.Wrap>
    </Skeleton>
  );
});
