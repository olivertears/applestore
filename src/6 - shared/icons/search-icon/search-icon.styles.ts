import styled from 'styled-components';

export const Svg = styled.svg<{ width?: string; theme?: 'dark' | 'light' }>`
  fill: #dadada;
  stroke: ${({ theme }) => (theme === 'dark' ? '#dadada' : '#1d1d1f')};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: ${({ width }) => width || '20px'};
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 5px;
`;
