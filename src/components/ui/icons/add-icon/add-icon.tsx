import { FC } from 'react';
import { EmptySvg } from '../../empty-svg';
import { AddIconProps } from './add-icon.types';

export const AddIcon: FC<AddIconProps> = ({ Svg = EmptySvg, onClick }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      fill="none"
      stroke="#434344"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      cursor="pointer"
      height="20px"
      width="20px"
      onClick={onClick}
      style={{ margin: '0 auto' }}
    >
      <path d="M17 2V32M2 17H32" />
    </Svg>
  );
};
