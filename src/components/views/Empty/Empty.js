import React from "react";
import PropTypes from "prop-types";

import styles from "./Empty.module.scss";

const Empty = (props) => {
  return <div className={styles.container}></div>;
};

Empty.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Empty;
