import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodayWeatherCard from "../../components/TodayWeatherCard/TodayWeatherCard";
import TodayWeatherCardDescription from "../../components/TodayWeatherCardDescription/TodayWeatherCardDescription";
import { actionWeather } from "../../store/actions/actionWeather";

import "./ContWithTodayCard.scss";

function ContWithTodayCard() {
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dispatch = useDispatch();

  const { weather, success, loading, card_idx } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    dispatch(actionWeather.getWeather());
  }, []);

  return (
    <div className="today-cart-container">
      {success && (
        <TodayWeatherCard
          temp={Math.round(weather[card_idx].temp.max)}
          day={
            card_idx === 0
              ? "Today"
              : card_idx === 1
              ? "Tomorrow"
              : dayWeek[new Date(weather[card_idx].dt * 1000).getDay()].slice(
                  0,
                  3
                )
          }
          icon={weather[card_idx].weather[0].icon}
          main={weather.main}
        />
      )}
      {success && (
        <TodayWeatherCardDescription
          temp={Math.round(weather[card_idx].temp.max)}
          feels={Math.round(weather[card_idx].feels_like.eve)}
          pressure={weather[card_idx].pressure}
          precipitation={weather[card_idx].rain}
          wind={weather[card_idx].speed}
        />
      )}
    </div>
  );
}

export default ContWithTodayCard;
