import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/HeaderConteiner";

import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
