import { SVGProps, ReactElement } from 'react';

export interface TradeIconProps {
  Svg?: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
