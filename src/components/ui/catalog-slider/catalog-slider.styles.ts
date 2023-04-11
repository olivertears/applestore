import styled from 'styled-components';

export const Slider = styled.div<{ marginBottom?: string }>`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 10px 30px 10px 10px;
  overflow-x: scroll;
  margin-bottom: ${({ marginBottom }) => marginBottom};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Empty = styled.div`
  min-width: calc((100% - 1000px) / 2);
`;
