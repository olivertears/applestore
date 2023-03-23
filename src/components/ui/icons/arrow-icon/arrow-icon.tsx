import { FC } from 'react';
import { EmptySvg } from '../../empty-svg';
import { ArrowIconProps } from './arrow-icon.types';

export const ArrowIcon: FC<ArrowIconProps> = ({ Svg = EmptySvg, onClick }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 16"
      fill="none"
      stroke="#1d1d1f"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      cursor="pointer"
      height="20px"
      width="20px"
      onClick={onClick}
    >
      <svg />
      <line x1="9" x2="1" y1="1" y2="8" />
      <line x1="1" x2="9" y1="8" y2="15" />
    </Svg>
  );
};
