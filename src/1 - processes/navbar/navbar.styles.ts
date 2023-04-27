import styled from 'styled-components';
import { Link } from '@shared/ui';

export const Wrap = styled.div`
  width: 100%;
  min-width: 800px;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1d1d1f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const StyledLink = styled(Link)`
  line-height: 20px;
  padding: 15px;
`;
