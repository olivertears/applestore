import { FC } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { userService } from '../../../services/user';
import { RouteNames } from './router.types';
import { Navbar } from '../navbar';
import { NotFound } from '../../pages/not-found';
import { Menu } from '../../pages/menu';
import { Store } from '../../pages/store';
import { SignIn } from '../../pages/sign-in';
import { SignUp } from '../../pages/sign-up';
import { Profile } from '../../pages/profile';
import { Favorites } from '../../pages/favorites';
import { Cart } from '../../pages/cart';
import { Orders } from '../../pages/orders';

export const Router: FC = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {!!userService.user$ ? (
            <>
              <Route path={RouteNames.PROFILE} element={<Profile />} />
              <Route path={RouteNames.CART} element={<Cart />} />
              <Route path={RouteNames.FAVORITES} element={<Favorites />} />
              <Route path={RouteNames.ORDERS} element={<Orders />} />
            </>
          ) : (
            <>
              <Route path={RouteNames.SIGN_IN} element={<SignIn />} />
              <Route path={RouteNames.SIGN_UP} element={<SignUp />} />
            </>
          )}
          <Route path={RouteNames.MENU} element={<Menu />} />
          <Route path={RouteNames.STORE} element={<Store />} />
          <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
