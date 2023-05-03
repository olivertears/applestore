import styled from 'styled-components';

export const Svg = styled.svg<{ selected?: boolean }>`
  fill: #0071e3;
  stroke: #0071e3;
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
