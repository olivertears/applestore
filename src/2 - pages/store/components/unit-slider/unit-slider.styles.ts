import styled from 'styled-components';

export const UnitCard = styled.div<{ photo: string }>`
  background: ${({ photo }) =>
    `url('http://localhost:8081/products/photo/default/${photo}') no-repeat`};
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
