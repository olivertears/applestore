import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { userService } from '../../../services/user';
import { NAVBAR_USER_LINKS, NAVBAR_COMMON_LINKS } from './navbar.constants';
import { RouteNames } from '../router';
import { AppleIcon } from '../../ui/icons';
import * as S from './navbar.styles';
import { StoreDropdown } from './components/store-dropdown';
import { Footer } from './components/footer';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <S.Wrap>
      <S.Navbar>
        <AppleIcon onClick={() => navigate(RouteNames.MENU)} />
        <S.StyledLink
          to={RouteNames.STORE}
          onMouseOver={() => setIsStoreDropdownOpen(true)}
          onMouseLeave={() => setIsStoreDropdownOpen(false)}
        >
          Магазин
        </S.StyledLink>
        {(!!userService.user$ ? NAVBAR_USER_LINKS : NAVBAR_COMMON_LINKS).map(({ name, link }) => (
          <S.StyledLink key={name} to={link}>
            {name}
          </S.StyledLink>
        ))}
        {!!userService.user$ && (
          <S.StyledLink to={RouteNames.SIGN_IN} onClick={userService.logout}>
            Выйти
          </S.StyledLink>
        )}
      </S.Navbar>
      <StoreDropdown
        isStoreDropdownOpen={isStoreDropdownOpen}
        setIsStoreDropdownOpen={setIsStoreDropdownOpen}
      />
      <Outlet />
      <Footer />
    </S.Wrap>
  );
};
