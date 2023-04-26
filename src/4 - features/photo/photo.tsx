import { ChangeEventHandler, FC, useState } from 'react';

import { AddPhotoIcon, CloseIcon } from '@shared/icons';
import { Loader, Skeleton } from '@shared/ui';
import * as S from './photo.styles';
import { PhotoProps } from './photo.types';

export const Photo: FC<PhotoProps> = ({ photo, addPhoto, deletePhoto }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onAvatarChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      setIsLoading(true);
      addPhoto(event.target.files[0]).finally(() => setIsLoading(false));
    }
  };

  const onAvatarDelete = () => {
    setIsLoading(true);
    deletePhoto().finally(() => setIsLoading(false));
  };

  return (
    <Skeleton>
      <S.Wrap photo={photo}>
        {isLoading && <Loader />}
        {!photo.split('/').pop() && <AddPhotoIcon width="100px" />}
        <S.Label htmlFor="avatar" />
        <S.Input type="file" id="avatar" onChange={onAvatarChange} />
        {!isLoading && !['', 'default_path.jpg'].includes(photo.split('/').pop() as string) && (
          <CloseIcon onClick={onAvatarDelete} />
        )}
      </S.Wrap>
    </Skeleton>
  );
};
