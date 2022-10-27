import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button";

import "./ContWithBtns.scss";

function ContWithBtns() {
  const { t } = useTranslation();

  // const [days, setDays] = useState(7);

  const { city, days, lang } = useSelector(
    (state) => state.weather
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionWeather.getWeather(city, days, lang));
    dispatch(actionWeather.setDays(days));
  }, [dispatch, city, days, lang]);

  const handleSevenDays = () => {
    dispatch(actionWeather.setDays(7))
  };

  const handleThirtyDays = () => {
    dispatch(actionWeather.setDays(30))
  };

  const handleTenDays = () => {
    dispatch(actionWeather.setDays(10))
  };

  return (
    <div className="btns-bar">
      <Button onClick={handleSevenDays} text={t("Btn_week")} />
      <Button onClick={handleThirtyDays} text={t("Btn_month")} />
      <Button onClick={handleTenDays} text={t("Btn_10_days")} />
    </div>
  );
}

export default ContWithBtns;
