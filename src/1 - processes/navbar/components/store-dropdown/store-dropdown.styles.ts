import styled from 'styled-components';
import { Link } from '@shared/ui';

export const StoreDropdown = styled.div<{ isOpen: boolean }>`
  width: 100%;
  padding: 75px 0 50px;
  background-color: #1d1d1f;
  position: fixed;
  top: 0;
  transform: ${({ isOpen }) => `translateY(${isOpen ? 0 : '-100%'})`};
  transition: 0.3s ease-in-out all;
  justify-content: center;
  display: flex;
  z-index: 2;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
`;
