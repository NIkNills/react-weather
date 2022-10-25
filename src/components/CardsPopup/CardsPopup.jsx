import React from "react";
import { useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import TodayWeatherCardDescription from "../TodayWeatherCardDescription/TodayWeatherCardDescription";

import "./CardsPopup.scss";

function CardsPopup({ onClick }) {
  const { popupArr } = useSelector((state) => state.weather);

  return (
    <div className="popup-wrapper" onClick={onClick}>
      <div className="popup">
        <CloseIcon className="popup__btn" onClick={onClick} />
        <TodayWeatherCardDescription
          temp={Math.round(popupArr[0].temp.max)}
          feels={Math.round(popupArr[0].feels_like.eve)}
          pressure={popupArr[0].pressure}
          precipitation={popupArr[0].rain}
          wind={popupArr[0].speed}
        />
      </div>
    </div>
  );
}

export default CardsPopup;
