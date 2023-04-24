import { FC } from 'react';
import * as S from './select-arrow-icon.styles';
import { SelectArrowIconProps } from './select-arrow-icon.types';

export const SelectArrowIcon: FC<SelectArrowIconProps> = ({ rotate }) => {
  return (
    <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" rotate={rotate}>
      <line x1="0" y1="8" x2="16" y2="24" />
      <line x1="16" y1="24" x2="32" y2="8" />
    </S.Svg>
  );
};
