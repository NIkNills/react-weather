import React from "react";
import { Card, Day, Info, Temperature, City } from "./style";

import Clock from "../Clock";

function TodayWeatherCard({ temp, day, icon, main, city }) {
  return (
    <Card className="theme">
      <Info>
        <div>
          <Temperature>{temp}&deg;</Temperature>
          <Day>{day}</Day>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          width={120}
          alt={main}
        />
      </Info>

      <Clock />
      <City>{city}</City>
    </Card>
  );
}

export default TodayWeatherCard;
