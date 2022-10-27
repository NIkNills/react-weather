import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";
import { useTranslation } from "react-i18next";

import TodayWeatherCard from "../../components/TodayWeatherCard/TodayWeatherCard";
import TodayWeatherCardDescription from "../../components/TodayWeatherCardDescription/TodayWeatherCardDescription";
import TodayCardSkeleton from "../../components/TodayCardSkeleton";
import TodayDescriptionSkeleton from "../../components/TodayDescriptionSkeleton";

import "./ContWithTodayCard.scss";

function ContWithTodayCard() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { weather, success, loading, city, days, lang } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    dispatch(actionWeather.getWeather(city, days, lang));
  }, [dispatch, city, days, lang]);

  return (
    <div className="today-cart-container">
      {loading ? (
        <TodayCardSkeleton />
      ) : (
        success && (
          <TodayWeatherCard
            temp={Math.round(weather.list[0].temp.max)}
            day={t("Today")}
            icon={weather.list[0].weather[0].icon}
            main={weather.list.main}
            city={weather.city.name}
          />
        )
      )}
      {loading ? (
        <TodayDescriptionSkeleton />
      ) : (
        success && (
          <TodayWeatherCardDescription
            temp={Math.round(weather.list[0].temp.max)}
            feels={Math.round(weather.list[0].feels_like.eve)}
            pressure={
              lang === "en"
                ? weather.list[0].pressure
                : Math.round(weather.list[0].pressure / 1.333)
            }
            precipitation={weather.list[0].rain}
            wind={weather.list[0].speed}
          />
        )
      )}
    </div>
  );
}

export default ContWithTodayCard;
