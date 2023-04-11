import { FC, forwardRef, PropsWithChildren } from 'react';
import * as S from './option-radio.styles';
import { OptionRadioProps } from './option-radio.types';

export const OptionRadio: FC<PropsWithChildren<OptionRadioProps>> = forwardRef<
  HTMLInputElement,
  PropsWithChildren<OptionRadioProps>
>(({ selectedValue, children, ...props }, ref) => {
  return (
    <S.Label selected={selectedValue === props.value} tabIndex={0}>
      <S.Input type="radio" {...props} ref={ref} />
      {children}
    </S.Label>
  );
});

OptionRadio.displayName = 'OptionRadio';
