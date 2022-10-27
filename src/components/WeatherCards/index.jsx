import React from "react";

import "./WeatherCards.scss";

function WeatherCards({
  day,
  date,
  icon,
  main,
  temp_max,
  temp_min,
  description,
  onClick,
}) {
  return (
    <div className="weather-card" onClick={onClick}>
      <p className="weather-card__day">{day}</p>
      <p className="weather-card__date">{date}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        width={60}
        alt={main}
      />
      <p className="weather-card__temp-max">{Math.round(temp_max)}&deg;</p>
      <p className="weather-card__temp-min">{Math.round(temp_min)}&deg;</p>
      <p className="weather-card__description">{description}</p>
    </div>
  );
}

export default WeatherCards;
