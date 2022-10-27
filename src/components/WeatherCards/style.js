import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 149px;
  height: 200px;
  padding: 10px;
  background: rgba(71, 147, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Day = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #939cb0;
`;

export const TemperatureMax = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export const TemperatureMin = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #939cb0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #939cb0;
`;
