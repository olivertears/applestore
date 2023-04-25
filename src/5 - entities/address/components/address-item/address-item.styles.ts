import styled from 'styled-components';

export const AddressItem = styled.div<{ onClick?: () => void }>`
  outline: 1px solid #dadada;
  padding: 10px;
  color: #434344;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;

  :hover {
    cursor: ${({ onClick }) => !!onClick && 'pointer'};
    outline: ${({ onClick }) => !!onClick && '1px solid #434344'};
  }
`;
