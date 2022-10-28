import styled from "styled-components";

export const Btn = styled.button`
  height: 35px;
  padding: 0 20px;
  background: ${props => (props.isSelected ? `#4793FF` : `#FFFFFF`)};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #000000;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  &:hover {
    background: #8abaff;
  }
`;
