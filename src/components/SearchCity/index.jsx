import React from "react";
import { useTranslation } from "react-i18next";

import "./SearchCity.scss";

function SearchCity({ onKeyUp }) {
  const { t } = useTranslation();

  return (
    <>
      <input
        onKeyUp={onKeyUp}
        className="search-city__input"
        placeholder={t("Enter_city_name")}
        type="text"
      />
    </>
  );
}

export default SearchCity;
