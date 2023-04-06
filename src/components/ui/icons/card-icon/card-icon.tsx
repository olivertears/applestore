import { FC } from 'react';
import * as S from './card-icon.styles';
import { CardIconProps } from './card-icon.types';

export const CardIcon: FC<CardIconProps> = ({ onClick }) => {
  return (
    <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 56" onClick={onClick}>
      <path
        fill="#434344"
        d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
      />
    </S.Svg>
  );
};
