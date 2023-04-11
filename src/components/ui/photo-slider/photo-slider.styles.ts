import styled from 'styled-components';

export const Wrap = styled.div`
  min-width: 600px;
  width: 60vw;
  height: 500px;
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

export const Slider = styled.div<{ index: number }>`
  margin-left: ${({ index }) => `calc(-60vw * ${index})`};
  display: flex;
  transition: 300ms ease-out margin-left;

  @media (max-width: 1000px) {
    margin-left: ${({ index }) => `calc(-600px * ${index})`};
  }
`;

export const Image = styled.div<{ src: string }>`
  min-width: 600px;
  width: 60vw;
  height: 500px;
  background: ${({ src }) => `url("http://localhost:8081/aws/${src}")`} no-repeat center;
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
