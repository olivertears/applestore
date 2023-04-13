import { FC, useEffect, useRef, useState } from 'react';
import { Search } from '../search';
import { Divider } from '../divider';
import { Loader } from '../loader';
import { SelectArrowIcon } from '../icons';
import * as S from './select.styles';
import { SelectProps } from './select.types';

export const Select: FC<SelectProps> = ({ label, children, value, onSelect, required, search }) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (!search && isMenuOpen) {
      selectRef.current?.focus();
    }
  }, [search, isMenuOpen]);

  const handleSelect = (value: string) => {
    onSelect(value);
    handleMenu();
    selectRef?.current?.blur();
  };

  const selectedItem = children.find(({ props }) => props.value === value)?.props
    .children as string;

  return (
    <S.Wrap
      ref={selectRef}
      onMouseDown={(event) => event.preventDefault()}
      onBlur={search ? undefined : handleMenu}
      tabIndex={0}
    >
      <S.SelectValue onClick={handleMenu}>
        {selectedItem}
        <SelectArrowIcon rotate={isMenuOpen ? 180 : 0} />
      </S.SelectValue>
      <S.Label>{label}</S.Label>
      {isMenuOpen && (
        <S.SelectMenu>
          {!!search && (
            <>
              <Search onBlur={handleMenu} autoFocus {...search} />
              <Divider margin="0" />
            </>
          )}
          <S.SelectOptions>
            {search?.isLoading && <Loader />}
            {!required && (
              <S.SelectOption selected={!selectedItem} onClick={() => handleSelect('')} />
            )}
            {children.map(({ props, key }) => (
              <S.SelectOption
                key={key}
                selected={selectedItem === props.children}
                onClick={() => handleSelect(props.value)}
              >
                {props.children}
              </S.SelectOption>
            ))}
          </S.SelectOptions>
        </S.SelectMenu>
      )}
    </S.Wrap>
  );
};
