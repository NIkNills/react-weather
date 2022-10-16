import React from "react";
import Button from "../../components/Button";

import "./ContWithBtns.scss";

function ContWithBtns() {
  return (
    <div className="btns-bar">
      <Button text={`For a week`} />
      <Button text={`For a month`} />
      <Button text={`For a 10 days`} />
    </div>
  );
}

export default ContWithBtns;
