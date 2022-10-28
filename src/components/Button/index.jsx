import React from "react";
import { useSelector } from "react-redux";
import { Btn } from "./style";

function Button({ text, onClick, value }) {

  const { days } = useSelector((state) => state.weather);

  return (
    <>
      {days === value ? (
        <Btn isSelected className="btn" onClick={onClick} value={value}>
          {text}
        </Btn>
      ) : (
        <Btn className="btn" onClick={onClick} value={value}>
          {text}
        </Btn>
      )}
    </>
  );
}

export default Button;
