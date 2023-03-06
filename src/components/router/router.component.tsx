import { FC } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { RouteNames } from './router.types';
import { NotFound } from '../pages/not-found';
import { Login } from '../pages/login';
import { Signup } from '../pages/signup';

export const Router: FC = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {user ? (
            <>
              {/*<Route element={<Navbar />}>*/}
              {/*  <Route path={RouteNames.MARKET} element={<Market />} />*/}
              {/*  <Route path="*" element={<Navigate to={RouteNames.CHARACTER_DEPOSIT} replace />} />*/}
              {/*</Route>*/}
            </>
          ) : (
            <>
              <Route path={RouteNames.LOGIN} element={<Login />} />
              <Route path={RouteNames.SIGNUP} element={<Signup />} />
            </>
          )}
          <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
