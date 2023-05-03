import styled from 'styled-components';

export const FavoriteItem = styled.div<{ preview?: string }>`
  padding: 30px 0;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ preview }) =>
    preview &&
    `url('http://localhost:8081/products/photo/preview/${preview}') no-repeat center #f5f5f7`};
  background-size: cover;
  border-radius: 20px;
`;

export const HeaderWrap = styled.div`
  position: absolute;
  bottom: 20px;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
