import styled from 'styled-components';

export const CastUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const CastLi = styled.li`
  width: 200px;
  background-color: #304040;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
`;
export const CastIMg = styled.img`
  border-radius: 5px 5px 0 0;
  min-width: 200px;
`;
export const CastBottom = styled.div`
  padding: 6px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const CastP = styled.p`
  text-align: start;
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 16px;
  color: #c9d1c8;
  font-weight: 400;
`;
