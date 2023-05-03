import styled from 'styled-components';

export const OrderItem = styled.div`
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  gap: 20px;
  width: 100%;
  min-width: 900px;
`;

export const OrderId = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 12px;
  color: #434343;
`;

export const OrderProduct = styled.div`
  padding: 20px 20px 20px 0;
  position: relative;
  display: flex;
  border-radius: 20px;
  gap: 20px;
  width: 100%;

  div:last-child {
    width: 100%;
  }
`;

export const Image = styled.div<{ preview?: string }>`
  height: available;
  min-width: 300px;
  max-width: 300px;
  max-height: 300px;
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
