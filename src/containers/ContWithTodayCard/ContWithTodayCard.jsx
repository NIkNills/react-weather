import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { dayWeek } from "../../constants/constants";
import TodayWeatherCard from "../../components/TodayWeatherCard/TodayWeatherCard";
import TodayWeatherCardDescription from "../../components/TodayWeatherCardDescription/TodayWeatherCardDescription";
import { actionWeather } from "../../store/actions/actionWeather";

import "./ContWithTodayCard.scss";

function ContWithTodayCard() {
  const dispatch = useDispatch();

  const { weather, success, loading } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    dispatch(actionWeather.getWeather());
  }, []);

  return (
    <div className="today-cart-container">
      {success && (
        <TodayWeatherCard
          temp={Math.round(weather[0].temp.max)}
          day={
            // idx === 0
            //   ? "Today"
            //   : idx === 1
            //   ? "Tomorrow"
            //   : dayWeek[new Date(weather[0].dt * 1000).getDay()].slice(
            //       0,
            //       3
            //     )
            'Today'
          }
          icon={weather[0].weather[0].icon}
          main={weather.main}
        />
      )}
      {success && (
        <TodayWeatherCardDescription
          temp={Math.round(weather[0].temp.max)}
          feels={Math.round(weather[0].feels_like.eve)}
          pressure={weather[0].pressure}
          precipitation={weather[0].rain}
          wind={weather[0].speed}
        />
      )}
    </div>
  );
}

export default ContWithTodayCard;
