import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <ul>
          <li>
            <ul className={styles.language}>
              <li>
                <a href="#">EN</a>|
              </li>
              <li>
                <a href="#">BLR</a>|
              </li>
              <li>
                <a href="#">RU</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li>
            <SearchIcon fontSize="small" />
            <input
              className={styles.searcher}
              type="search"
              placeholder="Search"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
