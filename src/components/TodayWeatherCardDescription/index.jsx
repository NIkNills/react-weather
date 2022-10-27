import React from "react";
import { useTranslation } from "react-i18next";
import { Description, Icon, Info, Item, List, Name } from "./style";

import Temp from "../../assets/temp.svg";
import Precipitation from "../../assets/precipitation.svg";
import Pressure from "../../assets/pressure.svg";
import Wind from "../../assets/wind.svg";

function TodayWeatherCardDescription({
  temp,
  feels,
  pressure,
  precipitation,
  wind,
}) {
  const { t } = useTranslation();

  return (
    <Description className="theme">
      <List>
        <Item>
          <Icon>
            <img src={Temp} alt="Temp" />
          </Icon>
          <Name>{t("Temperature")}, &deg;C</Name>
          <Info>
            {temp}&deg; - {t("feels_like")} {feels}&deg;
          </Info>
        </Item>
        <Item>
          <Icon>
            <img src={Pressure} alt="Pressure" />
          </Icon>
          <Name>{t("Pressure")}</Name>
          <Info>{pressure}</Info>
        </Item>
        <Item>
          <Icon>
            <img src={Precipitation} alt="Precipitation" />
          </Icon>
          <Name>{t("Precipitation")}</Name>
          <Info>{precipitation || t("No_precipitation")}</Info>
        </Item>
        <Item>
          <Icon>
            <img src={Wind} alt="Wind" />
          </Icon>
          <Name>{t("Wind")}</Name>
          <Info>{wind}</Info>
        </Item>
      </List>
    </Description>
  );
}

export default TodayWeatherCardDescription;
