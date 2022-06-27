import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Search.module.scss";

const Search = (props) => {
  const [value, setValue] = useState("");

  const handleChange = function (event) {
    setValue(event.target.value);
  };

  const handlePress = function (event) {
    if (event.key === "Enter") props.changeSearchString(value);
  };

  return (
    <div>
      <input
        className={styles.searcher}
        value={value}
        type="search"
        placeholder="Search"
        onChange={handleChange}
        onKeyPress={handlePress}
      />
    </div>
  );
};

Search.propTypes = {
  searchString: PropTypes.string,
  changeSearchString: PropTypes.func,
};

export default Search;
