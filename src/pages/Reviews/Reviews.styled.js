import styled from 'styled-components';

export const RevievsUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const RevievsLi = styled.li`
  width: 100%;
  padding: 20px;
  background-color: #5fc25b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  border: solid 2px #10a00a;
  gap: 14px;
`;

export const RevievsP = styled.p`
  text-align: start;
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 16px;
  color: #0b3f2a;
  font-weight: 400;
`;
export const RevievsError = styled.p`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 32px;
  color: #0b3f2a;
  font-weight: 400;
`;
