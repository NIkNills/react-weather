import React from "react";

import ContWithBtns from "../../containers/ContWithBtns";
import ContWithCards from "../../containers/ContWithCards";
import ContWithTodayCard from "../../containers/ContWithTodayCard";

import "./Main.scss";

function Main() {
  return (
    <div className="container main-container">
      <ContWithTodayCard />
      <ContWithBtns />
      <ContWithCards />
    </div>
  );
}

export default Main;
