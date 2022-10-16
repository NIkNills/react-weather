import React from "react";

import "./TodayWeatherCard.scss";

function TodayWeatherCard({ temp, day, icon, main }) {
  return (
    <div className="today-weather-card">
      <div className="today-info">
        <div>
          <p className="today__temp">{temp}&deg;</p>
          <p className="today__day">{day}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          width={120}
          alt={main}
        />
      </div>
      <div className="clock">Clock</div>
      <p className="today__city-name">City name</p>
    </div>
  );
}

export default TodayWeatherCard;
