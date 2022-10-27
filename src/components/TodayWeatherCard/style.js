import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 375px;
  height: 100%;
  padding: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Temperature = styled.p`
  font-weight: 500;
  font-size: 60px;
  color: #4793ff;
`;

export const Day = styled.p`
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;
`;

export const City = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #939cb0;
`;
