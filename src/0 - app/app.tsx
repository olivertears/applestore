import { FC } from 'react';

import { ErrorBoundary } from '@processes/error-boundary';
import { Router } from './router';
import { AppStyles } from './app.styles';

const App: FC = () => {
  return (
    <>
      <AppStyles />
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </>
  );
};

export default App;
