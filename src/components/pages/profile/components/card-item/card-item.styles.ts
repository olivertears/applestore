import styled from 'styled-components';

export const Card = styled.div<{ isActive?: boolean; onClick?: () => void }>`
  height: ${({ isActive }) => (isActive ? `180px` : '90px')};
  width: ${({ isActive }) => (isActive ? `300px` : '150px')};
  border-radius: ${({ isActive }) => (isActive ? `10px` : '5px')};
  background-color: #434344;
  outline: 3px solid #1d1d1f;
  position: relative;
  color: #fff;
  transition: 0.5s ease-in-out all;
  cursor: ${({ onClick }) => !!onClick && 'pointer'};
  user-select: none;
`;

export const Number = styled.div<{ isActive?: boolean }>`
  font-size: ${({ isActive }) => (isActive ? `24px` : '12px')};
  text-align: center;
  margin-top: ${({ isActive }) => (isActive ? `70px` : '35px')};
  transition: 0.5s ease-in-out all;
`;

export const Owner = styled.div<{ isActive?: boolean }>`
  font-size: ${({ isActive }) => (isActive ? `16px` : '8px')};
  position: absolute;
  bottom: ${({ isActive }) => (isActive ? `10px` : '5px')};
  left: ${({ isActive }) => (isActive ? `20px` : '10px')};
  transition: 0.5s ease-in-out all;
`;

export const ValidThru = styled.div<{ isActive?: boolean }>`
  font-size: ${({ isActive }) => (isActive ? `10px` : '5px')};
  position: absolute;
  top: ${({ isActive }) => (isActive ? `110px` : '55px')};
  right: ${({ isActive }) => (isActive ? `70px` : '35px')};
  width: ${({ isActive }) => (isActive ? `40px` : '20px')};
  transition: 0.5s ease-in-out all;
`;

export const Date = styled.div<{ isActive?: boolean }>`
  font-size: ${({ isActive }) => (isActive ? `20px` : '10px')};
  position: absolute;
  top: ${({ isActive }) => (isActive ? `110px` : '55px')};
  right: ${({ isActive }) => (isActive ? `20px` : '10px')};
  transition: 0.5s ease-in-out all;
`;
