import React from "react";

import "./SearchCity.scss";

function SearchCity({ onChange }) {
  return (
    <input
      onChange={onChange}
      className="search-city__input"
      placeholder="Enter the name of the city"
      type="text"
    />
  );
}

export default SearchCity;
