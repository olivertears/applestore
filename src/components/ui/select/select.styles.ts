import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 100%;
  min-width: 150px;
  position: relative;
  outline: none;
`;

export const Label = styled.div`
  color: #434344;
  border-radius: 5px;
  position: absolute;
  background-color: #fff;
  padding: 0 5px;
  font-size: 12px;
  top: -10px;
  left: 10px;
`;

export const SelectValue = styled.div`
  padding: 10px 30px 10px 10px;
  border-radius: 5px;
  outline: 1px solid #dadada;
  height: 39.2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  cursor: default;

  :hover,
  :focus {
    outline: 1px solid #434344;
  }
`;

export const SelectMenu = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  outline: 1px solid #dadada;
  position: absolute;
  background-color: #fff;
  width: 100%;
  z-index: 1;
  top: 39.2px;
`;

export const SelectOptions = styled.div`
  position: relative;
  overflow-y: auto;
  max-height: 150px;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dadada;
    border-radius: 5px;

    :hover {
      background-color: #434344;
    }
  }
`;

export const SelectOption = styled.div<{ selected?: boolean }>`
  display: flex;
  padding: 5px 10px;
  min-height: 30px;
  background-color: ${({ selected }) => selected && '#0071e3'};
  color: ${({ selected }) => selected && '#fff'};
  cursor: ${({ selected }) => (selected ? 'default' : 'pointer')};

  :hover,
  :focus {
    background-color: ${({ selected }) =>
      selected ? 'rgba(0, 113, 227, 0.9)' : 'rgba(0, 113, 227, 0.5)'};
    color: #fff;
  }
`;
