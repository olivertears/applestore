import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { userService } from '@entities/user/service';
import { NAVBAR_AUTHORIZED_LINKS, NAVBAR_UNAUTHORIZED_LINKS } from './navbar.constants';
import { RouteNames } from '@app/router';
import { AppleIcon } from '@shared/icons';
import * as S from './navbar.styles';
import { StoreDropdown } from './components/store-dropdown';
import { Footer } from './components/footer';
import { observer } from 'mobx-react-lite';

export const Navbar: FC = observer(() => {
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
        {(!!userService.user$?.role
          ? NAVBAR_AUTHORIZED_LINKS[userService.user$.role]
          : NAVBAR_UNAUTHORIZED_LINKS
        ).map(({ name, link }) => (
          <S.StyledLink
            key={name}
            to={link}
            onMouseOver={() => name === 'Магазин' && setIsStoreDropdownOpen(true)}
            onMouseLeave={() => name === 'Магазин' && setIsStoreDropdownOpen(false)}
          >
            {name}
          </S.StyledLink>
        ))}
        {!!userService.user$ && (
          <S.StyledLink
            to={RouteNames.SIGN_IN}
            onClick={() => {
              userService.logout();
              navigate(RouteNames.SIGN_IN);
            }}
          >
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
});
