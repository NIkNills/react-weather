import React from "react";
import { useSelector } from "react-redux";
import { Popup, Wrapper, Close } from "./style";

import CloseIcon from "@mui/icons-material/Close";
import TodayWeatherCardDescription from "../TodayWeatherCardDescription";

function CardsPopup({ onClick }) {
  const { popupArr } = useSelector((state) => state.weather);

  return (
    <Wrapper onClick={onClick}>
      <Popup>
        <Close>
          <CloseIcon className="popup__btn" onClick={onClick} />
        </Close>
        <TodayWeatherCardDescription
          temp={Math.round(popupArr[0].temp.max)}
          feels={Math.round(popupArr[0].feels_like.eve)}
          pressure={popupArr[0].pressure}
          precipitation={popupArr[0].rain}
          wind={popupArr[0].speed}
        />
      </Popup>
    </Wrapper>
  );
}

export default CardsPopup;
