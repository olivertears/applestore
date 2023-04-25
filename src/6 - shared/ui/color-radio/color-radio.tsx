import { FC, forwardRef } from 'react';
import * as S from './color-radio.styles';
import { ColorRadioProps } from './color-radio.types';

export const ColorRadio: FC<ColorRadioProps> = forwardRef<HTMLInputElement, ColorRadioProps>(
  ({ color, value, selectedValue, ...props }, ref) => {
    return (
      <S.Label color={color} selected={selectedValue === value}>
        <S.Input type="radio" {...props} value={value} ref={ref} />
      </S.Label>
    );
  }
);

ColorRadio.displayName = 'ColorRadio';
