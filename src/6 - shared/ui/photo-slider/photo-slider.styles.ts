import styled from 'styled-components';

export const Wrap = styled.div`
  min-width: 600px;
  width: min(60vw, 900px);
  max-height: 500px;
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  border-radius: 20px;
  overflow: hidden;
  position: sticky;
  top: 100px;
  transition: 10ms ease-in-out all;
`;

export const Slider = styled.div<{ index: number }>`
  margin-left: ${({ index }) => `calc(max(-60vw, -900px) * ${index})`};
  display: flex;
  transition: 300ms ease-out margin-left;
  max-height: 500px;

  @media (max-width: 1000px) {
    margin-left: ${({ index }) => `calc(-600px * ${index})`};
  }
`;

export const Image = styled.div<{ src?: string }>`
  min-width: 600px;
  width: min(60vw, 900px);
  height: 500px;
  background: ${({ src }) => src && `url("http://localhost:8081/products/photo/${src}")`} no-repeat
    center;
  background-size: contain;
`;

export const PointWrap = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  bottom: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Point = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(67,67,68,0.9)' : 'rgba(218,218,218,0.9)'};
  cursor: pointer;
`;
