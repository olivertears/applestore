import { SVGProps, ReactElement } from 'react';

export interface ArrowIconProps {
  Svg?: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
