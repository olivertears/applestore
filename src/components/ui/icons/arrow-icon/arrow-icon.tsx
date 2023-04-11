import { FC } from 'react';
import * as S from './arrow-icon.styles';
import { ArrowIconProps } from './arrow-icon.types';

export const ArrowIcon: FC<ArrowIconProps> = ({ position = 'left', visible = true, onClick }) => {
  return (
    <S.Wrap position={position} visible={visible} onClick={onClick}>
      <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
        <svg />
        <line x1="9" x2="1" y1="1" y2="8" />
        <line x1="1" x2="9" y1="8" y2="15" />
      </S.Svg>
    </S.Wrap>
  );
};
