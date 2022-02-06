import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import EuroMap from "./EuroMap/EuroMap";

import styles from "./Homepage.module.scss";

const Homepage = (props) => {
  const content = props.textContent[0].homePage;

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h1>{content.title}</h1>
        <p>{content.firstPar}</p>
        {/* <p>{content.secondPar}</p> */}
        <div className={styles.btn_container}>
          <NavLink to="/about" className={styles.home_btn}>
            {content.btn} →
          </NavLink>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.table}>
          <div className={styles.thumbs}>
            <img src="https://i.postimg.cc/V62GczdF/94021247-517728538898925-8818940714446404587-n.jpg" />
            <div className={styles.caption}>
              <span className={styles.title}>Title</span>
              <span className={styles.info}>
                subtitle subtitle subtitle subtitle subtitle subtitle subtitle
                subtitle subtitle subtitle subtitle subtitle subtitle subtitle
                subtitle subtitle subtitle subtitle
              </span>
            </div>
          </div>

          <div className={styles.thumbs}>
            <img
              src="https://i.postimg.cc/ryDCr2tc/85257794-280578909592745-5139936381796588779-n.jpg"
              title="sadasdasdasd"
            />
            <div className={styles.caption}>
              <span className={styles.title}>Title</span>
              <span className={styles.info}>
                subtitle subtitle subtitle subtitle subtitle subtitle subtitle
                subtitle subtitle subtitle subtitle subtitle subtitle subtitle
                subtitle subtitle subtitle subtitle
              </span>
            </div>
          </div>
          <div className={styles.thumbs}>
            <img src="https://i.postimg.cc/Gp3v3W1W/77170316-1460845767421835-1882814319713675709-n.jpg" />
            <div className={styles.caption}>
              <span className={styles.title}>Title</span>
              <span className={styles.info}>
                subtitle subtitle subtitle subtitle subtitle subtitle subtitle
                subtitle subtitle subtitle subtitle subtitle subtitle subtitle
                subtitle subtitle subtitle subtitle
              </span>
            </div>
          </div>
          <NavLink to="/map" className={styles.table_img}>
            {/* <Map /> */}
            <EuroMap />
            {/* <img src="https://i.postimg.cc/44pyMWDV/depositphotos-65928399-stock-illustration-grey-map-of-belarus.jpg" /> */}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  textContent: PropTypes.array.isRequired,
};

export default Homepage;
