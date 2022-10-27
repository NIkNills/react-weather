import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import SearchCity from "../SearchCity/SearchCity";
import Logo from "../../assets/logo.svg";

import "./Header.scss";
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
      dispatch(actionWeather.setCity(e.target.value))
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
          <ThemeSwitch onClick={onClick} checked={checked}/>
          <SearchCity onKeyUp={handleSearchCity} />
          <LanguageSwitch />
        </div>
      </div>
    </>
  );
}

export default Header;
