import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  border-radius: 5px 5px 0 0;
  min-width: 200px;
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  transition: box-shadow 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const CardBottom = styled.div`
  padding: 6px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  line-height: 1.33;
  text-align: start;
  color: #18e533;
`;

export const H4 = styled.h4`
  text-align: start;
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 16px;
  color: #c9d1c8;
  font-weight: 400;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #4cb5f5;
`;

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 44px;
  font-weight: 700;
`;
