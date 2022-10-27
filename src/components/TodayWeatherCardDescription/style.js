import styled from "styled-components";
import img from "../../assets/card-bg.png";

export const Description = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 50px;
  background: url(${img}) top right no-repeat;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
`;

export const Name = styled.p`
  width: 135px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #939cb0;
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;
