import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import { actionWeather } from "../../store/actions/actionWeather";

import "./ContWithBtns.scss";

function ContWithBtns() {
  const [days, setDays] = useState(7);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionWeather.getWeather(days));
  }, [days]);

  const handleSevenDays = () => {
    setDays(7);
  };

  const handleThirtyDays = () => {
    setDays(30);
  };

  const handleTenDays = () => {
    setDays(10);
  }

  return (
    <div className="btns-bar">
      <Button onClick={handleSevenDays} text={`For a week`} />
      <Button onClick={handleThirtyDays} text={`For a month`} />
      <Button onClick={handleTenDays} text={`For a 10 days`} />
    </div>
  );
}

export default ContWithBtns;
