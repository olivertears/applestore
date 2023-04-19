import { FC } from 'react';
import * as S from './search.styles';
import { SearchProps } from './search.types';
import { SearchIcon } from '../icons';

export const Search: FC<SearchProps> = ({ theme, ...props }) => {
  return (
    <S.Wrap>
      <S.Input {...props} theme={theme} placeholder="Поиск..." />
      <SearchIcon theme={theme} />
    </S.Wrap>
  );
};
