import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";
import { dayWeek, months } from "../../constants/constants";

import WeatherCards from "../../components/WeatherCards/WeatherCards";

import "./ContWithCards.scss";

function ContWithCards() {
  const dispatch = useDispatch();

  const { weather, success, loading, days } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    dispatch(actionWeather.getWeather(days));
  }, [days]);

  return (
    <div className="cards-container">
      {success &&
        weather.map((i, idx) => {
          const date = new Date(i.dt * 1000);

          return (
            <WeatherCards
              key={`${date.getDate()}${months[date.getMonth()]}`}
              day={
                idx === 0
                  ? "Today"
                  : idx === 1
                  ? "Tomorrow"
                  : dayWeek[date.getDay()].slice(0, 3)
              }
              date={`
                ${date.getDate()}
                ${months[date.getMonth()].slice(0, 3)}
              `}
              icon={i.weather[0].icon}
              main={i.weather.main}
              temp_max={i.temp.max}
              temp_min={i.temp.min}
              description={i.weather.description}
            />
          );
        })}
    </div>
  );
}

export default ContWithCards;
