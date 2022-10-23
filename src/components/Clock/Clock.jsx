import React, { useState, useEffect, useRef } from "react";

import "./Clock.scss";

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

  return <div className="clock">{time}</div>;
}

export default Clock;
