import styled from 'styled-components';

export const Svg = styled.svg<{ selected?: boolean }>`
  fill: #1d1d1f;
  stroke: #1d1d1f;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill-rule: evenodd;
  clip-rule: evenodd;
  height: 30px;
  width: 30px;
  cursor: pointer;
  margin: 5px 0;
`;
