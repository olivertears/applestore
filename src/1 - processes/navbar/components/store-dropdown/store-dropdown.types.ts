import { Dispatch, SetStateAction } from 'react';

export interface StoreDropdownProps {
  isStoreDropdownOpen: boolean;
  setIsStoreDropdownOpen: Dispatch<SetStateAction<boolean>>;
}
