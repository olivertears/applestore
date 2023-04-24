import styled from 'styled-components';

export const Svg = styled.svg<{ width?: string; color?: string; hover?: string }>`
  width: ${({ width }) => (width ? width : '20px')};
  height: ${({ width }) => (width ? width : '20px')};
  fill: ${({ color }) => (color ? color : '#dadada')};
  transition: 0.5s ease-in-out all;
  z-index: 1;

  :hover {
    cursor: ${({ onClick }) => !!onClick && 'pointer'};
    fill: ${({ hover }) => (hover ? hover : '#fff')};
  }
`;
