import { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { errorService } from './service';
import { ErrorItem } from './components/error-item';
import * as S from './error-boundary.styles';

export const ErrorBoundary: FC<PropsWithChildren> = observer(({ children }) => {
  return (
    <S.Wrap>
      <S.ErrorContainer>
        {errorService.errors$.map(({ id, message }) => (
          <ErrorItem key={id} id={id}>
            {message}
          </ErrorItem>
        ))}
      </S.ErrorContainer>
      {children}
    </S.Wrap>
  );
});
