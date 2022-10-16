import React from "react";

import './SearchCity.scss'

function SearchCity() {
  return (
    <div className="search-city">
      <input
        className="search-city__input"
        placeholder="Enter the name of the city"
        type="text"
      />
    </div>
  );
}

export default SearchCity;
