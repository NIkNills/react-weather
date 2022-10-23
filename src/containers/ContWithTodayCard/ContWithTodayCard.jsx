import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";

import TodayWeatherCard from "../../components/TodayWeatherCard/TodayWeatherCard";
import TodayWeatherCardDescription from "../../components/TodayWeatherCardDescription/TodayWeatherCardDescription";

import "./ContWithTodayCard.scss";
import TodayCardSkeleton from "../../components/TodayCardSkeleton";
import TodayDescriptionSkeleton from "../../components/TodayDescriptionSkeleton";

function ContWithTodayCard() {
  const dispatch = useDispatch();

  const { weather, success, loading, city, days } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    dispatch(actionWeather.getWeather(city, days));
  }, [city, days]);

  return (
    <div className="today-cart-container">
      {loading ? (
        <TodayCardSkeleton />
      ) : (
        success && (
          <TodayWeatherCard
            temp={Math.round(weather[0].temp.max)}
            day={"Today"}
            icon={weather[0].weather[0].icon}
            main={weather.main}
            city={city.slice(0, 1).toUpperCase() + city.slice(1)}
          />
        )
      )}
      {loading ? (
        <TodayDescriptionSkeleton />
      ) : (
        success && (
          <TodayWeatherCardDescription
            temp={Math.round(weather[0].temp.max)}
            feels={Math.round(weather[0].feels_like.eve)}
            pressure={weather[0].pressure}
            precipitation={weather[0].rain}
            wind={weather[0].speed}
          />
        )
      )}
    </div>
  );
}

export default ContWithTodayCard;
