import styled from 'styled-components';

export const Label = styled.label<{ selected: boolean }>`
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
  border: solid ${({ selected }) => (selected ? '2px #0071e3' : '1px #dadada')};

  :hover {
    border: solid ${({ selected }) => (selected ? '2px #0071e3' : '1px #434344')};
  }

  :focus-within {
    outline: ${({ selected }) => selected && '4px solid rgba(0,125,250,.6)'};
  }
`;

export const Input = styled.input`
  display: none;
`;
