import styled from 'styled-components';

export const ProductCard = styled.div`
  padding: 30px 0;
  width: 360px;
  height: 460px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrap = styled.div`
  margin-top: 20px;
  height: 30px;
`;

export const Image = styled.div<{ preview?: string }>`
  height: 275px;
  width: 360px;
  background: ${({ preview }) =>
    preview &&
    `url('http://localhost:8081/products/photo/preview/${preview}') no-repeat center #f5f5f7`};
  background-size: cover;
  border-radius: 10px;
`;

export const ColorWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const Color = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: inset 0 2px 3px 1px rgba(0, 0, 0, 0.2);
  outline-offset: 3px;
`;

export const PriceInfo = styled.div`
  padding: 0 30px;
  font-size: 14px;
  height: 20px;
  color: #1d1d1f;
`;
