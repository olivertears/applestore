import { FC, lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Navbar } from '@processes/navbar';
import { userService } from '@entities/user/service';
import { Loader } from '@shared/ui';
import { RouteNames } from './router.types';
import { ProtectedRoute } from './protected-route';
import { authGuard, roleGuard } from './utils';

const Cart = lazy(() => import('@pages/cart'));
const Catalog = lazy(() => import('@pages/catalog'));
const Favorites = lazy(() => import('@pages/favorites'));
const Menu = lazy(() => import('@pages/menu'));
const NotFound = lazy(() => import('@pages/not-found'));
const Orders = lazy(() => import('@pages/orders'));
const Profile = lazy(() => import('@pages/profile'));
const SignIn = lazy(() => import('@pages/sign-in'));
const SignUp = lazy(() => import('@pages/sign-up'));
const Store = lazy(() => import('@pages/store'));
const StoreProduct = lazy(() => import('@pages/store-product'));
const StoreUnit = lazy(() => import('@pages/store-unit'));

export const Router: FC = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            }
          >
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
