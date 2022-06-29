import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Search.module.scss";

const Search = (props) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(pathname);

  const handleChange = function (event) {
    setValue(event.target.value);
  };

  const handlePress = function (event) {
    if (event.key === "Enter") {
      props.changeSearchString(value);
      navigate(`/search`);
    }
  };

  const handleClick = function () {
    props.changeSearchString(value);
  };

  return (
    <div>
      <input
        value={value}
        type="search"
        placeholder="Search"
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
          Search
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchString: PropTypes.string,
  changeSearchString: PropTypes.func,
};

export default Search;
