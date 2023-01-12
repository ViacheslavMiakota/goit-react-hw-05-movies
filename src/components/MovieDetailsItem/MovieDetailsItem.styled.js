import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
  margin: 35px 0 25px 0;
  font-size: 28px;
  font-weight: 500;
  color: #1e4e24;
  @media (min-width: 768px) {
    margin: 25px 0 55px 0;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    align-self: flex-start;
    width: 350px;
  }
`;

export const DetailsBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 50px;
    margin-bottom: 23px;
  }
`;

export const DetailsContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
`;

export const TitleH4 = styled.h4`
  text-align: center;
  margin: 15px 0 15px 0;
  font-size: 20px;
  font-weight: 500;
  color: #0b3f2a;
`;

export const TitleH3 = styled.h3`
  text-align: start;
  margin-bottom: 10px;
  font-size: 20px;
  color: #0b3f2a;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
  }
`;

export const Information = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
`;

export const AddInfoLink = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  padding: 20px;
  text-transform: lowercase;
  color: #bc198a;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #0b3f2a;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;
export const CastListUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin: -10px;
`;
