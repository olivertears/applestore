import { FC, forwardRef } from 'react';
import * as S from './color-input.styles';
import { ColorInputProps } from './color-input.types';

export const ColorInput: FC<ColorInputProps> = forwardRef<HTMLInputElement, ColorInputProps>(
  ({ color, ...props }, ref) => {
    return (
      <S.Label color={color}>
        <S.Input type="color" {...props} ref={ref} />
      </S.Label>
    );
  }
);

ColorInput.displayName = 'ColorInput';
