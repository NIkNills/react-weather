import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const Popup = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 375px);
  z-index: 10;
  display: flex;
  width: 750px;
  height: 300px;
  background: #ffffff;
  border-radius: 20px;
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
