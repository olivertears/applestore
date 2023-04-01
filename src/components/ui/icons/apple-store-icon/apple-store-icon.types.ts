import { SVGProps, ReactElement } from 'react';

export interface AppleStoreIconProps {
  Svg?: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
