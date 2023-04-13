import styled from 'styled-components';

export const ProductCard = styled.div<{ img?: string }>`
  background: ${({ img }) => `url(${img}) no-repeat`};
  background-size: contain;
  width: 150px;
  height: 120px;
  position: relative;
  display: flex;
  justify-content: center;

  div {
    position: absolute;
    bottom: 0;
  }
`;
