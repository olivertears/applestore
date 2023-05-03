import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { ProtectedRouterProps } from './protected-route.types';
import { observer } from 'mobx-react-lite';

export const ProtectedRoute: FC<ProtectedRouterProps> = observer(({ guard }) => {
  const navigate = guard();
  return navigate ? <Navigate to={`../${navigate}`} /> : <Outlet />;
});
