import styled from 'styled-components';

export const ProductFormTabs = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 20px;
`;

export const Tab = styled.div<{ selected?: boolean }>`
  font-size: 17px;
  font-weight: bold;
  color: ${({ selected }) => (selected ? '#1d1d1f' : '#434344')};
  text-decoration: ${({ selected }) => selected && 'underline'};
`;
