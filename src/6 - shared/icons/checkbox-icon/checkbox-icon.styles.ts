import styled from 'styled-components';

export const Svg = styled.svg`
  fill: none;
  stroke: #434344;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: 36px;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  margin: 0 auto;
`;
