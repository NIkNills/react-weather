import React, { useState, useEffect, useRef } from "react";
import { Time } from "./style";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(ref.current);
    };
  }, [time]);

  return <Time>{time.slice(0, 5)}</Time>;
}

export default Clock;
