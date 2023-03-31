import { FC, forwardRef } from 'react';
import * as S from './color-radio.styles';
import { ColorRadioProps } from './color-radio.types';

export const ColorRadio: FC<ColorRadioProps> = forwardRef<HTMLInputElement, ColorRadioProps>(
  ({ color, selectedValue, ...props }, ref) => {
    return (
      <S.Label color={color} selected={selectedValue === color}>
        <S.Input type="radio" {...props} ref={ref} />
      </S.Label>
    );
  }
);

ColorRadio.displayName = 'ColorRadio';
