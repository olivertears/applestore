import styled from 'styled-components';

export const Card = styled.div<{ onClick?: () => void }>`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 5px 2px #dadada;
  transition: 300ms all;
  cursor: ${({ onClick }) => !!onClick && 'pointer'};

  :hover {
    box-shadow: 0 0 5px 3px #dadada;
    transform: scale(103%);
  }
`;
