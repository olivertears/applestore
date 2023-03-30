import { FC } from 'react';
import { EmptySvg } from '../../empty-svg';
import * as S from './arrow-icon.styles';
import { ArrowIconProps } from './arrow-icon.types';

export const ArrowIcon: FC<ArrowIconProps> = ({
  top,
  left,
  right,
  rotate,
  visible = true,
  onClick
}) => {
  return (
    <S.Wrap top={top} left={left} right={right} rotate={rotate} visible={visible} onClick={onClick}>
      <EmptySvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 16"
        fill="none"
        stroke="#1d1d1f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        cursor="pointer"
        height="20px"
        width="20px"
      >
        <svg />
        <line x1="9" x2="1" y1="1" y2="8" />
        <line x1="1" x2="9" y1="8" y2="15" />
      </EmptySvg>
    </S.Wrap>
  );
};
