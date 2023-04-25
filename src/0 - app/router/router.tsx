import { FC, Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Navbar } from '@processes/navbar';
import { userService } from '@entities/user/service';
import { Loader } from '@shared/ui';
import { RouteNames } from './router.types';
import { ProtectedRoute } from './protected-route';
import { authGuard, roleGuard } from './utils';

import { Cart } from '@pages/cart';
import { Catalog } from '@pages/catalog';
import { Favorites } from '@pages/favorites';
import { Menu } from '@pages/menu';
import { NotFound } from '@pages/not-found';
import { Orders } from '@pages/orders';
import { Profile } from '@pages/profile';
import { SignIn } from '@pages/sign-in';
import { SignUp } from '@pages/sign-up';
import { Store } from '@pages/store';
import { StoreProduct } from '@pages/store-product';
import { StoreUnit } from '@pages/store-unit';

export const Router: FC = observer(() => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {!userService.user$ && (
              <>
                <Route path={RouteNames.SIGN_IN} element={<SignIn />} />
                <Route path={RouteNames.SIGN_UP} element={<SignUp />} />
              </>
            )}

            <Route element={<ProtectedRoute guard={authGuard} />}>
              <Route path={RouteNames.PROFILE} element={<Profile />} />
              <Route path={RouteNames.CART} element={<Cart />} />
              <Route path={RouteNames.FAVORITES} element={<Favorites />} />
              <Route path={RouteNames.ORDERS} element={<Orders />} />

              {/*<Route element={<ProtectedRoute guard={roleGuard('MANAGER')} />}>*/}
              {/*  <Route path={RouteNames.CATALOG} element={<Catalog />} />*/}
              {/*</Route>*/}
            </Route>

            <Route path={RouteNames.CATALOG} element={<Catalog />} />

            <Route path={RouteNames.MENU} element={<Menu />} />
            <Route path={RouteNames.STORE} element={<Store />} />
            <Route path={RouteNames.STORE_UNIT} element={<StoreUnit />} />
            <Route path={RouteNames.STORE_UNIT_PRODUCT} element={<StoreProduct />} />
            <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />

            <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
});
