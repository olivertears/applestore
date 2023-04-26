import styled from 'styled-components';

export const Wrap = styled.div<{ photo: string }>`
  position: relative;
  min-width: 300px;
  min-height: 300px;
  border-radius: 10px;
  outline: 1px solid #dadada;
  background: ${({ photo }) => !!photo && `url('http://localhost:8081/${photo}')`} no-repeat center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  background-color: ${({ photo }) => !photo.split('/').pop() && '#fff'};

  :hover {
    cursor: pointer;
    outline: 1px solid #434344;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;
