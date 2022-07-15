import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Search.module.scss";

const Search = (props) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentLanguage = props.currentLanguage;

  console.log(currentLanguage);

  const handleChange = function (event) {
    setValue(event.target.value);
  };

  const handlePress = function (event) {
    if (event.key === "Enter") {
      props.changeSearchString(value);
      navigate(`/search`);
    }
  };

  const handleClick = function (event) {
    props.changeSearchString(value);
  };

  const setLanguage = function () {
    switch (currentLanguage) {
      case "eng":
        return "Search";
        break;
      case "blr":
        return "Шукаць";
        break;
      case "ru":
        return "Искать";
        break;
    }
  };

  return (
    <div>
      <input
        style={{
          fontFamily: `${
            currentLanguage === "eng" ? "MyriadProRegular" : "calibri"
          }`,
        }}
        value={value}
        type="search"
        placeholder={setLanguage()}
        onChange={handleChange}
        onKeyPress={handlePress}
      />
      <div
        className={styles.btn_container}
        style={{
          display: `${pathname === "/search" ? "flex" : "none"}`,
          justifyContent: `${pathname === "/search" ? "center" : ""}`,
        }}
      >
        <button className={styles.btnSearch} onClick={handleClick}>
          {setLanguage()}
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  searchString: PropTypes.string,
  changeSearchString: PropTypes.func,
};

export default Search;
