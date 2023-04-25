import styled from 'styled-components';

export const Label = styled.label<{ color: string; selected: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: inset 0 2px 3px 1px rgba(0, 0, 0, 0.2);
  outline-offset: 3px;
  outline: ${({ selected }) => selected && '2px solid #0071e3'};
  cursor: ${({ selected }) => !selected && 'pointer'};

  :hover {
    outline: solid ${({ selected }) => (selected ? '2px #0071e3' : '1px #dadada')};
  }
`;

export const Input = styled.input`
  display: none;
`;
