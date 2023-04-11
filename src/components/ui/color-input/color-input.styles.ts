import styled from 'styled-components';

export const Label = styled.label.attrs(({ color }) => ({
  style: {
    backgroundColor: color
  }
}))`
  min-width: 34px;
  height: 34px;
  border-radius: 50%;
  box-shadow: inset 0 2px 3px 1px rgba(0, 0, 0, 0.2);
  outline-offset: 3px;
  cursor: pointer;

  :hover {
    outline: 2px solid #dadada;
  }
`;

export const Input = styled.input`
  display: none;
`;
