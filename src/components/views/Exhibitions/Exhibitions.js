import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import styles from "./Exhibitions.module.scss";

const Exhibitions = () => {
  const [curPosition, setCurPosition] = useState(0);

  const handleUp = function () {
    let height = 115;
    let position = curPosition + height;

    position = Math.min(position, 0);

    setCurPosition(position);
  };

  const handleDown = function () {
    let height = 115;
    let count = 5;
    let wrapLenght = 6;
    let position = curPosition - height;

    position = Math.max(position, -height * (wrapLenght - count));

    setCurPosition(position);
  };

  return (
    <div className={styles.container}>
      <div className={styles.curfoto}>curfoto</div>
      <div className={styles.allfoto}>
        <div className={styles.carusel}>
          <ArrowDropUpIcon
            onClick={handleUp}
            style={{
              visibility: `${curPosition === 0 ? "hidden" : "visible"}`,
            }}
            fontSize="large"
          />
          <div id="gallery" className={styles.gallery}>
            <ul
              className={styles.wrapper}
              style={{ marginTop: `${curPosition}px` }}
            >
              <li>
                <img
                  className={styles.active}
                  src="https://i.postimg.cc/V62GczdF/94021247-517728538898925-8818940714446404587-n.jpg"
                />
              </li>
              <li>
                <img src="https://i.postimg.cc/ryDCr2tc/85257794-280578909592745-5139936381796588779-n.jpg" />
              </li>
              <li>
                <img src="https://i.postimg.cc/Gp3v3W1W/77170316-1460845767421835-1882814319713675709-n.jpg" />
              </li>
              <li>
                <img src="https://i.postimg.cc/44pyMWDV/depositphotos-65928399-stock-illustration-grey-map-of-belarus.jpg" />
              </li>
              <li>
                <img src="https://i.postimg.cc/ryDCr2tc/85257794-280578909592745-5139936381796588779-n.jpg" />
              </li>
              <li>
                <img src="https://i.postimg.cc/V62GczdF/94021247-517728538898925-8818940714446404587-n.jpg" />
              </li>
            </ul>
          </div>
          <ArrowDropDownIcon
            className={styles.btnDown}
            onClick={handleDown}
            fontSize="large"
          />
        </div>
      </div>

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
