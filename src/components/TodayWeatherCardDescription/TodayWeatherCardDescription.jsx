import React from "react";
import { useTranslation } from "react-i18next";

import Temp from "../../assets/temp.svg";
import Precipitation from "../../assets/precipitation.svg";
import Pressure from "../../assets/pressure.svg";
import Wind from "../../assets/wind.svg";

import "./TodayWeatherCardDescription.scss";

function TodayWeatherCardDescription({
  temp,
  feels,
  pressure,
  precipitation,
  wind,
}) {
  const { t } = useTranslation();

  return (
    <div className="description">
      <ul className="description__list">
        <li className="description__list-item">
          <div className="description__item-icon">
            <img src={Temp} alt="Temp" />
          </div>
          <p className="description__item-name">{t("Temperature")}, &deg;C</p>
          <p className="description__item-info">
            {temp}&deg; - {t("feels_like")} {feels}&deg;
          </p>
        </li>
        <li className="description__list-item">
          <div className="description__item-icon">
            <img src={Pressure} alt="Pressure" />
          </div>
          <p className="description__item-name">{t("Pressure")}</p>
          <p className="description__item-info">{pressure}</p>
        </li>
        <li className="description__list-item">
          <div className="description__item-icon">
            <img src={Precipitation} alt="Precipitation" />
          </div>
          <p className="description__item-name">{t("Precipitation")}</p>
          <p className="description__item-info">
            {precipitation || t("No_precipitation")}
          </p>
        </li>
        <li className="description__list-item">
          <div className="description__item-icon">
            <img src={Wind} alt="Wind" />
          </div>
          <p className="description__item-name">{t("Wind")}</p>
          <p className="description__item-info">{wind}</p>
        </li>
      </ul>
    </div>
  );
}

export default TodayWeatherCardDescription;
