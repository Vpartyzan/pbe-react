import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Exhibitions.module.scss";

const Exhibitions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.curfoto}>curfoto</div>
      <div className={styles.allfoto}>allfoto</div>
      <div className={styles.description}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={styles.btn_container}>
          <NavLink to="/map" className={styles.btn}>
            Full Gallery →
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
