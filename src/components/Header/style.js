import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 15vh;
  margin: 0 auto;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TitleText = styled.h1`
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  color: #4793ff;
`;
