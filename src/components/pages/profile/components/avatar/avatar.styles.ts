import styled from 'styled-components';

export const Wrap = styled.div<{ avatar?: string }>`
  position: relative;
  min-width: 300px;
  min-height: 300px;
  border-radius: 10px;
  outline: 1px solid #dadada;
  background: ${({ avatar }) => !!avatar && `url('http://localhost:8081/users/photo/${avatar}')`}
    no-repeat center;
  background-size: cover;
  overflow: hidden;

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
