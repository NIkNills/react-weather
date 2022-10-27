import React from "react";
import { Card, Date, Day, Description, TemperatureMax, TemperatureMin } from "./style";

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
    <Card className="cards-theme" onClick={onClick}>
      <Day>{day}</Day>
      <Date>{date}</Date>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        width={60}
        alt={main}
      />
      <TemperatureMax>{Math.round(temp_max)}&deg;</TemperatureMax>
      <TemperatureMin>{Math.round(temp_min)}&deg;</TemperatureMin>
      <Description>{description}</Description>
    </Card>
  );
}

export default WeatherCards;
