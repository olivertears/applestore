import { FC } from 'react';

import { Router } from './router';
import { ErrorBoundary } from '../1 - processes/error-boundary';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export default App;
