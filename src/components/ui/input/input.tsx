import { FC, forwardRef, KeyboardEventHandler, useId } from 'react';
import { integerValidator, priceValidator } from './utils';
import * as S from './input.styles';
import { InputProps } from './input.types';

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, value, error, type, ...props }, ref) => {
    const id = useId();

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      switch (type) {
        case 'price':
          return priceValidator(event);
        case 'integer':
          return integerValidator(event);
        default:
          return undefined;
      }
    };

    return (
      <S.Wrap>
        <S.Input {...props} type={type} ref={ref} isError={!!error} id={id} onKeyDown={onKeyDown} />
        <S.Label isError={!!error} isEmpty={!!value?.toString()} htmlFor={id}>
          {label}
        </S.Label>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrap>
    );
  }
);

Input.displayName = 'Input';
