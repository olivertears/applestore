import { FC, useState } from 'react';
import * as S from './navbar.styles';
import { NAVBAR_LINKS } from './navbar.constants';
import { AppleIcon } from '../../icons/apple-icon';
import { StoreDropdown } from './store-dropdown';
import { ProductType } from '../../../interfaces/IProduct';

export const Navbar: FC = () => {
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [token, setToken] = useState('');

  const registration = () => {
    fetch('http://localhost:8081/auth/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: 'Ilya',
        lastname: 'Ignatovich',
        email: 'vitalya@mail.ru',
        password: '123'
      })
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token));
  };

  const login = () => {
    fetch('http://localhost:8081/auth/authenticate', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'vitalya@mail.ru',
        password: '123'
      })
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token));
  };

  console.log(token);

  const addProduct = () => {
    fetch('http://localhost:8081/product/addProduct', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        price: 10,
        brand: 'string',
        name: 'string',
        type: 'AirPods',
        color: 'string',
        originCountry: 'string',
        amount: 5,
        averageRate: 9
      })
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    fetch('http://localhost:8081/user/getAllUsers', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <S.Wrap>
      <S.Navbar>
        <AppleIcon width={'20px'} color={'#dadada'} hover={'#fff'} />
        {NAVBAR_LINKS.map(({ name, link }) => (
          <S.StyledLink
            key={name}
            to={link}
            onMouseOver={() => name === 'Store' && setIsStoreDropdownOpen(true)}
            onMouseLeave={() => name === 'Store' && setIsStoreDropdownOpen(false)}
          >
            {name}
          </S.StyledLink>
        ))}
        <button onClick={registration}>registration</button>
        <button onClick={login}>login</button>
        <button onClick={addProduct}>addProduct</button>
        <button onClick={getUser}>getUser</button>
      </S.Navbar>
      <StoreDropdown
        isStoreDropdownOpen={isStoreDropdownOpen}
        setIsStoreDropdownOpen={setIsStoreDropdownOpen}
      />
    </S.Wrap>
  );
};
