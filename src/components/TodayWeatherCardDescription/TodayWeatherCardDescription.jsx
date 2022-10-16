import React from "react";

import Temp from "../../assets/temp.svg";
import Precipitation from "../../assets/precipitation.svg";
import Pressure from "../../assets/pressure.svg";
import Wind from "../../assets/wind.svg";

import "./TodayWeatherCardDescription.scss";

function TodayWeatherCardDescription({ temp, feels, pressure, precipitation, wind }) {
  return (
    <div className="description">
      <ul className="description__list">
        <li className="description__list-item">
          <div className="description__item-icon">
            <img src={Temp} alt="Temp" />
          </div>
          <p className="description__item-name">Temperature, &deg;C</p>
          <p className="description__item-info">
            {temp}&deg; - feels like {feels}&deg;
          </p>
        </li>
        <li className="description__list-item">
          <div className="description__item-icon">
            <img src={Pressure} alt="Pressure" />
          </div>
          <p className="description__item-name">Pressure, mmHg</p>
          <p className="description__item-info">{pressure}</p>
        </li>
        <li className="description__list-item">
          <div className="description__item-icon">
            <img src={Precipitation} alt="Precipitation" />
          </div>
          <p className="description__item-name">Precipitation, mm</p>
          <p className="description__item-info">{precipitation || 'No precipitation'}</p>
        </li>
        <li className="description__list-item">
          <div className="description__item-icon">
            <img src={Wind} alt="Wind" />
          </div>
          <p className="description__item-name">Wind, m/s</p>
          <p className="description__item-info">{wind}</p>
        </li>
      </ul>
    </div>
  );
}

export default TodayWeatherCardDescription;
