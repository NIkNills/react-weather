import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

import SearchCity from "../SearchCity/SearchCity";
import Logo from "../../assets/logo.svg";

import "./Header.scss";

function Header() {
 
  return (
    <>
        <div className="container header-container">
          <div className="header-logo">
            <img src={Logo} alt="Logo" />
            <h1>React Weather</h1>
          </div>
          <div className="header-wrapper">
          <ThemeSwitch />
          <SearchCity />
          </div>
        </div>
    </>
  );
}

export default Header;
