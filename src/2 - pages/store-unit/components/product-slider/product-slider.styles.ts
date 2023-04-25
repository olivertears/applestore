import styled from 'styled-components';

export const ProductCard = styled.div`
  width: 300px;
  height: 440px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrap = styled.div`
  height: 80px;
  margin-top: 20px;
`;

export const Image = styled.div<{ img?: string }>`
  height: 240px;
  width: 300px;
  background: ${({ img }) => `url(${img}) no-repeat`} center;
  background-size: contain;
  border-radius: 10px;
  margin: 10px 0;
`;

export const ColorWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;
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
  font-size: 14px;
  color: #1d1d1f;
  margin: 1px 0;
`;
