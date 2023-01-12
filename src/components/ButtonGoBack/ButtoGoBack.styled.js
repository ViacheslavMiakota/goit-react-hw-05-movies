import styled from 'styled-components';

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: inherit;
  text-transform: uppercase;
  border-bottom: 2px solid #304040;
  color: #5b7075;
  margin: 20px auto 10px;
  font-size: 18px;
  transition: transform 250ms linear;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
