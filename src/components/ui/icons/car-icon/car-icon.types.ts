import { SVGProps, ReactElement } from 'react';

export interface CarIconProps {
  Svg?: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
