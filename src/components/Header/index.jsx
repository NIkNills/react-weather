import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";

import ThemeSwitch from "../ThemeSwitch";
import SearchCity from "../SearchCity";
import Logo from "../../assets/logo.svg";
import LanguageSwitch from "../LanguageSwitch";

import "./Header.scss";

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
      e.target.value = '';
    }
  };

  return (
    <>
      <div className="container header-container">
        <div className="header-logo">
          <img src={Logo} alt="Logo" />
          <h1>React Weather</h1>
        </div>
        <div className="header-wrapper">
          <ThemeSwitch onClick={onClick} checked={checked} />
          <SearchCity onKeyUp={handleSearchCity} />
          <LanguageSwitch />
        </div>
      </div>
    </>
  );
}

export default Header;
