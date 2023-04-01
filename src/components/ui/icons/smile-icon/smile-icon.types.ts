import { SVGProps, ReactElement } from 'react';

export interface SmileIconProps {
  Svg?: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
