import { Children, cloneElement, FC, forwardRef, isValidElement, PropsWithChildren } from 'react';
import * as S from './fieldset.styles';
import { FieldsetProps } from './fieldset.types';

export const Fieldset: FC<PropsWithChildren<FieldsetProps>> = forwardRef<
  HTMLInputElement,
  FieldsetProps
>(({ column, children, ...props }, ref) => {
  return (
    <S.Fieldset column={column}>
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child, {
            ...child.props,
            ref: ref,
            ...props
          })
      )}
    </S.Fieldset>
  );
});

Fieldset.displayName = 'Fieldset';
