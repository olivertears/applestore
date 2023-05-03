import styled from 'styled-components';

export const Card = styled.div<{
  onClick?: () => void;
  padding?: string;
  borderRadius?: string;
  color?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => (padding ? padding : '30px')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '20px')};
  box-shadow: 0 0 5px 2px #dadada;
  transition: 300ms all;
  cursor: ${({ onClick }) => (!!onClick ? 'pointer' : 'default')};
  background-color: ${({ color }) => color || '#f5f5f7'};

  :hover {
    box-shadow: 0 0 5px 3px #dadada;
    transform: scale(103%);
  }
`;
