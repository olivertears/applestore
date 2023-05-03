import styled from 'styled-components';

export const OrderProduct = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  border-radius: 20px;
  gap: 20px;
  width: 100%;
  min-width: 500px;
`;

export const Image = styled.div<{ preview?: string }>`
  height: 100px;
  min-width: 100px;
  background: ${({ preview }) =>
    preview &&
    `url('http://localhost:8081/products/photo/preview/${preview}') no-repeat center #f5f5f7`};
  background-size: cover;
  border-radius: 20px;
`;
