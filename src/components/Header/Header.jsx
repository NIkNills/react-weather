import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import SearchCity from "../SearchCity/SearchCity";
import Logo from "../../assets/logo.svg";

import "./Header.scss";
import LanguageSwitch from "../LanguageSwitch";

function Header() {
  const [city, setCity] = useState("mogilev");

  const dispatch = useDispatch();

  const { days, lang, theme } = useSelector((state) => state.weather);

  // const setCurrentCity = (currentCity) =>
  //   localStorage.setItem("currentCity", currentCity);

  useEffect(() => {
    dispatch(actionWeather.getWeather(city, days, lang, theme));
  }, [city, days, lang, theme]);

  const handleSearchCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.target.value);
      // setCurrentCity(e.target.value);
      // e.target.value = "";

      // localStorage.getItem('currentCity')
    }
  };

  const themeToggler = (e) => {
    console.log(theme)
  }

  return (
    <>
      <div className="container header-container">
        <div className="header-logo">
          <img src={Logo} alt="Logo" />
          <h1>React Weather</h1>
        </div>
        <div className="header-wrapper">
          <ThemeSwitch onClick={themeToggler}/>
          <SearchCity onKeyUp={handleSearchCity} />
          <LanguageSwitch />
        </div>
      </div>
    </>
  );
}

export default Header;
