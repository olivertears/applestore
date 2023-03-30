import { ChangeEventHandler, FC } from 'react';
import * as S from './avatar.styles';
import axios from 'axios';
import { userService } from '../../../../../services/user';
import { IUser } from '../../../../../interfaces';
import { Skeleton } from '../../../../ui';

export const Avatar: FC = () => {
  const submit: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      const fn = await axios.post(
        'http://localhost:8081/aws',
        { file: event.target.files[0] },
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      );
      userService.setUser({ ...userService.user$, avatar: fn.data } as IUser);
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
