import { FC, forwardRef, useId } from 'react';
import * as S from './text-area.styles';
import { TextareaProps } from './text-area.types';

export const TextArea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, value, error, maxWidth, ...props }, ref) => {
    const id = useId();

    return (
      <S.Wrap maxWidth={maxWidth}>
        <S.TextArea {...props} ref={ref} isError={!!error} id={id} />
        <S.Label isError={!!error} isEmpty={!!value} htmlFor={id}>
          {label}
        </S.Label>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrap>
    );
  }
);

TextArea.displayName = 'TextArea';
