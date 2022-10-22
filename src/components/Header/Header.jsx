import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../store/actions/actionWeather";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import SearchCity from "../SearchCity/SearchCity";
import Logo from "../../assets/logo.svg";

import "./Header.scss";

function Header() {
  const [city, setCity] = useState("mogilev");

  const dispatch = useDispatch();

  const { days } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(actionWeather.getWeather(city, days));
  }, [city, days]);

  const handleSearchCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.target.value);
      e.target.value = "";
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
          <ThemeSwitch />
          <SearchCity onKeyUp={handleSearchCity} />
        </div>
      </div>
    </>
  );
}

export default Header;
