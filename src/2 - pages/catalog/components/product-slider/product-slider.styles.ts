import styled from 'styled-components';

export const ProductCard = styled.div<{ img?: string }>`
  background: ${({ img }) => `url(${img}) no-repeat`};
  background-size: contain;
  width: 250px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 30px;

  div {
    position: absolute;
    bottom: 20px;
  }
`;
