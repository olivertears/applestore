import styled from 'styled-components';

export const Svg = styled.svg`
  fill: none;
  stroke: #1d1d1f;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: 10px;
  width: 10px;
  transform: ${({ rotate }) => rotate && `rotate(180deg)`};
  transition: 0.2s ease-in-out transform;
  position: absolute;
  top: 15px;
  right: 10px;
`;
