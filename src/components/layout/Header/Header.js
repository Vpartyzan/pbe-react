import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav>
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
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
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
