import React from "react";

import "./Button.scss";

function Button({ text, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
