import styled from 'styled-components';

interface WrapProps {
  position?: 'left' | 'right';
  visible?: boolean;
}

export const Wrap = styled.div<WrapProps>`
  background-color: rgba(210, 210, 215, 0.64);
  border-radius: 50%;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  rotate: ${({ position }) => position === 'right' && '180deg'};
  transition: 100ms background-color;
  position: absolute;
  left: ${({ position }) => position === 'left' && '20px'};
  right: ${({ position }) => position === 'right' && '20px'};

  :hover {
    cursor: pointer;
    background-color: rgba(228, 228, 228, 0.6);
  }
`;

export const Svg = styled.svg`
  fill: none;
  stroke: #1d1d1f;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
