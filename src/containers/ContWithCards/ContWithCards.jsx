import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";
import { dayWeek, months } from "../../constants/constants";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import WeatherCards from "../../components/WeatherCards/WeatherCards";
import CardSkeleton from "../../components/CardSkeleton";
import CardsPopup from "../../components/CardsPopup";

import "./ContWithCards.scss";

function ContWithCards() {
  const [popup, setPopup] = useState(false);

  const dispatch = useDispatch();

  const { weather, success, loading, city, days } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    dispatch(actionWeather.getWeather(city, days));
  }, [city, days]);

  const handlePopup = (idx) => () => {
    setPopup(!popup);
    dispatch(actionWeather.addPopup(weather.find((_, i) => i === idx)));
    disableBodyScroll(document.body);
  };

  const handleClosePopup = (e) => {
    if (e.target === e.currentTarget) {
      setPopup(!popup);
      dispatch(actionWeather.clearPopup());
      clearAllBodyScrollLocks(document.body);
    }
  };

  return (
    <>
      <div className="cards-container">
        {popup && <CardsPopup onClick={handleClosePopup} />}
        {loading
          ? [...new Array(7)].map((_, idx) => {
              return <CardSkeleton key={idx} />;
            })
          : success &&
            weather.map((i, idx) => {
              const date = new Date(i.dt * 1000);

              return (
                <div key={i.dt}>
                  <WeatherCards
                    onClick={handlePopup(idx)}
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
                </div>
              );
            })}
      </div>
    </>
  );
}

export default ContWithCards;
