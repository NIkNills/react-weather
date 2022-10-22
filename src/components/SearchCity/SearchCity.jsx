import React from "react";

import "./SearchCity.scss";

function SearchCity({ onKeyUp }) {
  return (
    <>
      <input
        onKeyUp={onKeyUp}
        className="search-city__input"
        placeholder="Enter city name"
        type="text"
      />
    </>
  );
}

export default SearchCity;
