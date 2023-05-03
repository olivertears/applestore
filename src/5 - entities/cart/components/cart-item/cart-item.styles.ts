import styled from 'styled-components';

export const CartItem = styled.div`
  padding: 30px;
  position: relative;
  display: flex;
  border-radius: 20px;
  gap: 20px;
  width: 100%;
  min-width: 1020px;
  max-width: 1020px;

  div:nth-child(2) {
    width: 100%;
  }
`;

export const Image = styled.div<{ preview?: string }>`
  height: 300px;
  min-width: 300px;
  background: ${({ preview }) =>
    preview &&
    `url('http://localhost:8081/products/photo/preview/${preview}') no-repeat center #f5f5f7`};
  background-size: cover;
  border-radius: 20px;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
