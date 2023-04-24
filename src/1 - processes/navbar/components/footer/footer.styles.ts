import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
  width: 100%;
  margin: auto;
`;

export const FooterBottomLine = styled.div`
  white-space: nowrap;
  display: grid;
  grid-template-columns: 265px auto 80px;
  width: 100%;
  max-width: 1040px;
  padding: 0 20px;
`;

export const LinkWrap = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 30px;
`;

export const StyledLink = styled(Link)`
  color: #0071e3;
  font-size: 12px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
