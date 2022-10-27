import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";
import { Container, HeaderLogo, TitleText, Wrapper } from "./style";

import ThemeSwitch from "../ThemeSwitch";
import SearchCity from "../SearchCity";
import Logo from "../../assets/logo.svg";
import LanguageSwitch from "../LanguageSwitch";


function Header({ onClick, checked }) {
  const dispatch = useDispatch();

  const { city, days, lang, theme } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(actionWeather.getWeather(city, days, lang, theme));
    dispatch(actionWeather.setCity(city));
  }, [dispatch, city, days, lang, theme]);

  const handleSearchCity = (e) => {
    if (e.keyCode === 13) {
      dispatch(actionWeather.setCity(e.target.value));
      e.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <HeaderLogo>
          <img src={Logo} alt="Logo" />
          <TitleText>React Weather</TitleText>
        </HeaderLogo>
        <Wrapper>
          <ThemeSwitch onClick={onClick} checked={checked} />
          <SearchCity onKeyUp={handleSearchCity} />
          <LanguageSwitch />
        </Wrapper>
      </Container>
    </>
  );
}

export default Header;
