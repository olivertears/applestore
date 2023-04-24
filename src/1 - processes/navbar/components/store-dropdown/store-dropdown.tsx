import { FC } from 'react';
import * as S from './store-dropdown.styles';
import { StoreDropdownProps } from './store-dropdown.types';
import { ProductTypeEnum } from '../../../../interfaces';
import { RouteNames } from '@app/router';
import { StoreSearch } from './store-search';
import { Column, Divider } from '@shared/ui';

export const StoreDropdown: FC<StoreDropdownProps> = ({
  isStoreDropdownOpen,
  setIsStoreDropdownOpen
}) => {
  return (
    <S.StoreDropdown
      isOpen={isStoreDropdownOpen}
      onMouseOver={() => setIsStoreDropdownOpen(true)}
      onMouseLeave={() => setIsStoreDropdownOpen(false)}
    >
      <Column width="100px" gap="5px">
        {Object.keys(ProductTypeEnum).map((key) => (
          <S.StyledLink
            key={key}
            to={RouteNames.STORE_UNIT.replace(':type', key.toLowerCase())}
            onClick={() => setIsStoreDropdownOpen(false)}
          >
            {key}
          </S.StyledLink>
        ))}
      </Column>
      <Divider vertical margin="0 50px" />
      <StoreSearch />
    </S.StoreDropdown>
  );
};
