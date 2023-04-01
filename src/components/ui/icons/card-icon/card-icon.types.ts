import { SVGProps, ReactElement } from 'react';

export interface CardIconProps {
  Svg?: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
