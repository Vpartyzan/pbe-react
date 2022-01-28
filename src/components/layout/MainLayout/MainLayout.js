import React from "react";
import PropTypes from "prop-types";

import Container from "@mui/material/Container";

import Header from "../Header/Header";

import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">{children}</Container>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
