import styled from 'styled-components';

export const UnitCard = styled.div<{ img: string }>`
  background: ${({ img }) => `url(${img}) no-repeat`};
  background-size: contain;
  width: 200px;
  height: 170px;
  position: relative;
  display: flex;
  justify-content: center;

  div {
    position: absolute;
    bottom: 0;
  }
`;
