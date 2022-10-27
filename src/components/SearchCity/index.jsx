import React from "react";
import { useTranslation } from "react-i18next";
import { Search } from "./style";

function SearchCity({ onKeyUp }) {
  const { t } = useTranslation();

  return (
    <>
      <Search
        onKeyUp={onKeyUp}
        placeholder={t("Enter_city_name")}
        type="text"
      ></Search>
    </>
  );
}

export default SearchCity;
