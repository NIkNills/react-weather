import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";
import { useTranslation } from "react-i18next";
import { Buttons } from "./style";

import Button from "../../components/Button";

function ContWithBtns() {
  const { t } = useTranslation();

  const { city, days, lang } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionWeather.getWeather(city, days, lang));
    dispatch(actionWeather.setDays(days));
  }, [dispatch, city, days, lang]);

  const handleSevenDays = () => {
    dispatch(actionWeather.setDays(7));
  };

  const handleThirtyDays = () => {
    dispatch(actionWeather.setDays(30));
  };

  const handleTenDays = () => {
    dispatch(actionWeather.setDays(10));
  };

  return (
    <Buttons>
      <Button onClick={handleSevenDays} text={t("Btn_week")} />
      <Button onClick={handleThirtyDays} text={t("Btn_month")} />
      <Button onClick={handleTenDays} text={t("Btn_10_days")} />
    </Buttons>
  );
}

export default ContWithBtns;
