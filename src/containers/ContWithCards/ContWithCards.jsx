import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionWeather,
  actionWeatherCardIdx,
} from "../../store/actions/actionWeather";

import WeatherCards from "../../components/WeatherCards/WeatherCards";

import "./ContWithCards.scss";

function ContWithCards() {
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dispatch = useDispatch();

  const { weather, success, loading } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(actionWeather.getWeather());
  }, []);

  // const handleCardClick = () => {
  //   dispatch(actionWeatherCardIdx(1))
  // }

  const cards = document.querySelectorAll(".weather-card");

  const handleCardClick = () => {
    cards.forEach((i, idx) => {
      i.addEventListener("click", () => {
        dispatch(actionWeatherCardIdx(idx));
      });
    });
  };

  return (
    <div className="cards-container">
      {success &&
        weather.map((i, idx) => {
          const date = new Date(i.dt * 1000);

          return (
            <WeatherCards
              key={`${date.getDate()}${months[date.getMonth()]}`}
              onClick={handleCardClick}
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
