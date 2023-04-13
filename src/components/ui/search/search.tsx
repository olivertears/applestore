import { FC } from 'react';
import * as S from './search.styles';
import { SearchProps } from './search.types';
import { SearchIcon } from '../icons';

export const Search: FC<SearchProps> = (props) => {
  return (
    <>
      <S.Input {...props} />
      <SearchIcon />
    </>
  );
};
