import styled from 'styled-components';

export const ProductPhotoWrap = styled.div`
  max-width: 605px;
`;

export const ProductPhotoCard = styled.div<{ photo?: string }>`
  position: relative;
  min-width: 100px;
  min-height: 100px;
  border-radius: 10px;
  outline: 1px solid #dadada;
  background: ${({ photo }) => photo && `url('http://localhost:8081/products/photo/${photo}')`}
    no-repeat center;
  background-size: cover;
  overflow: hidden;
  display: flex;
`;

export const ProductPhotoLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

export const ProductPhotoInput = styled.input`
  display: none;
`;
