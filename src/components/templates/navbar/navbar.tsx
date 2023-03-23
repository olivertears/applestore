import { FC, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { userService } from '../../../services/user';
import { NAVBAR_USER_LINKS, NAVBAR_COMMON_LINKS } from './navbar.constants';
import { RouteNames } from '../router';
import { AppleIcon } from '../../ui/icons';
import * as S from './navbar.styles';
import { StoreDropdown } from './store-dropdown';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

  const logout = () => {
    userService.setUser(null);
  };

  return (
    <S.Wrap>
      <S.Navbar>
        <AppleIcon hover={'#fff'} onClick={() => navigate(RouteNames.MENU)} />
        <S.StyledLink
          to={RouteNames.STORE}
          onMouseOver={() => setIsStoreDropdownOpen(true)}
          onMouseLeave={() => setIsStoreDropdownOpen(false)}
        >
          Каталог
        </S.StyledLink>
        {(!!userService.user$ ? NAVBAR_USER_LINKS : NAVBAR_COMMON_LINKS).map(({ name, link }) => (
          <S.StyledLink key={name} to={link}>
            {name}
          </S.StyledLink>
        ))}
        {!!userService.user$ && (
          <S.StyledLink to={RouteNames.SIGN_IN} onClick={logout}>
            Выйти
          </S.StyledLink>
        )}
      </S.Navbar>
      <StoreDropdown
        isStoreDropdownOpen={isStoreDropdownOpen}
        setIsStoreDropdownOpen={setIsStoreDropdownOpen}
      />
      <Outlet />
    </S.Wrap>
  );
};
