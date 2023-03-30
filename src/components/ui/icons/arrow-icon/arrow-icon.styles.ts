import styled from 'styled-components';

export const Wrap = styled.div<{
  top?: number;
  left?: number;
  right?: number;
  rotate?: number;
  visible?: boolean;
}>`
  background-color: rgba(210, 210, 215, 0.64);
  border-radius: 50%;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  rotate: ${({ rotate }) => rotate && rotate + 'deg'};
  transition: 100ms background-color;
  position: absolute;
  top: ${({ top }) => top && top + 'px'};
  left: ${({ left }) => left && left + 'px'};
  right: ${({ right }) => right && right + 'px'};
  z-index: 1;

  :hover {
    cursor: pointer;
    background-color: rgba(228, 228, 228, 0.6);
  }
`;
