import { FC, lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Navbar } from '@processes/navbar';
import { userService } from '@entities/user/service';
import { Loader } from '@shared/ui';
import { RouteNames } from './router.types';
import { ProtectedRoute } from './protected-route';
import { authGuard, roleGuard } from './utils';
import { UserRoleEnum } from '@entities/user/types';

const NotFound = lazy(() => import('@pages/not-found'));
const Menu = lazy(() => import('@pages/menu'));

const Store = lazy(() => import('@pages/store'));
const StoreUnit = lazy(() => import('@pages/store-unit'));
const StoreProduct = lazy(() => import('@pages/store-product'));

const SignIn = lazy(() => import('@pages/sign-in'));
const SignUp = lazy(() => import('@pages/sign-up'));

const Profile = lazy(() => import('@pages/profile'));
const Favorites = lazy(() => import('@pages/favorites'));
const Cart = lazy(() => import('@pages/cart'));
const MyOrders = lazy(() => import('@pages/my-orders/my-orders'));

const Orders = lazy(() => import('@pages/orders/orders'));
const Catalog = lazy(() => import('@pages/catalog'));
const Chat = lazy(() => import('@pages/chat'));
const Statistics = lazy(() => import('@pages/statistics'));

const Applications = lazy(() => import('@pages/applications'));
const Workers = lazy(() => import('@pages/workers'));

export const Router: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    localStorage.getItem('token')
      ? userService.getUser().finally(() => setIsLoading(false))
      : setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
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
                <Route path={RouteNames.STORE} element={<Store />} />
                <Route path={RouteNames.STORE_UNIT} element={<StoreUnit />} />
                <Route path={RouteNames.STORE_UNIT_PRODUCT} element={<StoreProduct />} />
              </>
            )}

            <Route element={<ProtectedRoute guard={authGuard} />}>
              <Route element={<ProtectedRoute guard={roleGuard(UserRoleEnum.USER)} />}>
                <Route path={RouteNames.STORE} element={<Store />} />
                <Route path={RouteNames.STORE_UNIT} element={<StoreUnit />} />
                <Route path={RouteNames.STORE_UNIT_PRODUCT} element={<StoreProduct />} />
                <Route path={RouteNames.PROFILE} element={<Profile />} />
                <Route path={RouteNames.FAVORITES} element={<Favorites />} />
                <Route path={RouteNames.CART} element={<Cart />} />
                <Route path={RouteNames.MY_ORDERS} element={<MyOrders />} />
              </Route>

              <Route element={<ProtectedRoute guard={roleGuard(UserRoleEnum.MANAGER)} />}>
                <Route path={RouteNames.ORDERS} element={<Orders />} />
                <Route path={RouteNames.CATALOG} element={<Catalog />} />
                <Route path={RouteNames.CHAT} element={<Chat />} />
                <Route path={RouteNames.STATISTICS} element={<Statistics />} />
              </Route>

              <Route element={<ProtectedRoute guard={roleGuard(UserRoleEnum.ADMIN)} />}>
                <Route path={RouteNames.APPLICATIONS} element={<Applications />} />
                <Route path={RouteNames.WORKERS} element={<Workers />} />
              </Route>
            </Route>

            <Route path={RouteNames.MENU} element={<Menu />} />
            <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
            <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
