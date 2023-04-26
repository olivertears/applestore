import styled from 'styled-components';

export const Svg = styled.svg<{ width?: string }>`
  fill: none;
  stroke: #1d1d1f;
  stroke-width: 0;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: ${({ width }) => (width ? width : '50px')};
  width: ${({ width }) => (width ? width : '50px')};
  cursor: pointer;
  margin: auto;
`;
