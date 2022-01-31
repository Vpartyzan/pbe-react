import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h1>
          Polychrome <br /> Belarusian <br /> Embroidery
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className={styles.btn_container}>
          <NavLink to="/about" className={styles.home_btn}>
            About Exhibitions →
          </NavLink>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.table}>
          <div className={styles.table_img}>
            <img src="https://i.postimg.cc/V62GczdF/94021247-517728538898925-8818940714446404587-n.jpg" />
          </div>
          <div className={styles.table_img}>
            <img src="https://i.postimg.cc/ryDCr2tc/85257794-280578909592745-5139936381796588779-n.jpg" />
          </div>
          <div className={styles.table_img}>
            <img src="https://i.postimg.cc/Gp3v3W1W/77170316-1460845767421835-1882814319713675709-n.jpg" />
          </div>
          <div className={styles.table_img}>
            <img src="https://i.postimg.cc/44pyMWDV/depositphotos-65928399-stock-illustration-grey-map-of-belarus.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
