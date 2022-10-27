import React from "react";
import { Container } from "./style";

import ContWithBtns from "../../containers/ContWithBtns";
import ContWithCards from "../../containers/ContWithCards";
import ContWithTodayCard from "../../containers/ContWithTodayCard";

function Main() {
  return (
    <Container>
      <ContWithTodayCard />
      <ContWithBtns />
      <ContWithCards />
    </Container>
  );
}

export default Main;
