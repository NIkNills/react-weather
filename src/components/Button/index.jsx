import React from "react";
import { Btn } from "./style";

function Button({ text, onClick }) {
  return (
    <Btn className="btn" onClick={onClick}>
      {text}
    </Btn>
  );
}

export default Button;
