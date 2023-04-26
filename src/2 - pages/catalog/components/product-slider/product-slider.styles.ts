import styled from 'styled-components';

export const ProductCard = styled.div<{ preview?: string }>`
  background: ${({ preview }) =>
    preview && `url('http://localhost:8081/products/photo/preview/${preview}') no-repeat center`};
  background-size: auto 80%;
  width: 250px;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 30px;

  div {
    position: absolute;
    bottom: 20px;
  }
`;
