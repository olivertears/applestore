import styled from 'styled-components';

export const SliderView = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  overflow: hidden;
  width: 640px;
`;

export const SliderContent = styled.div<{ left?: number }>`
  margin-left: ${({ left }) => left + 'px'};
  display: flex;
  gap: 15px;
  align-items: center;
  height: 190px;
  transition: 0.5s ease-in-out all;
`;

export const ArrowRight = styled.svg`
  rotate: 180deg;
`;
