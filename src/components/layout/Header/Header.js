import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import SearchIcon from "@mui/icons-material/Search";

import styles from "./Header.module.scss";

const Header = (props) => {
  const content = props.content[0].header;

  const handleClick = function (e) {
    // console.log(e.target.innerText.toLowerCase());
    props.changeLanguage(e.target.innerText.toLowerCase());
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <ul className={styles.navWrapper}>
          <li>
            <ul className={styles.language}>
              <li>
                <a href="#" onClick={handleClick}>
                  ENG
                </a>
                |
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  BLR
                </a>
                |
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  RU
                </a>
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <NavLink to="/">{content.home}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{content.about}</NavLink>
              </li>
              <li>
                <a href="https://www.instagram.com/skarodzitsa/">
                  {content.contact}
                </a>
              </li>
            </ul>
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

Header.propTypes = {
  content: PropTypes.array.isRequired,
  changeLanguage: PropTypes.func,
};

export default Header;
