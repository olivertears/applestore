import { FC } from 'react';
import { PhotoTabProps } from './photo-tab.types';
import { Text } from '../../../../../../ui';

export const PhotoTab: FC<PhotoTabProps> = ({ colors }) => {
  if (!colors) {
    return (
      <Text type="param" textAlign="center">
        Прежде чем установить фотографии, нужно заполнить основную информацию о продукте
      </Text>
    );
  }

  return (
    <>
      {colors.map(({ name }) => (
        <Text key={name} type="param">
          {name}
        </Text>
      ))}
    </>
  );
};
