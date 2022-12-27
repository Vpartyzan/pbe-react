import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

import EuroMap from "./EuroMap/EuroMap";

import styles from "./Homepage.module.scss";

const Homepage = (props) => {
  const content = props.content[0].homePage;
  const language = props.content[0].language;

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h1
          style={{
            fontFamily: `${
              language === "eng" ? "Titillium Web Bold" : "calibri"
            }`,
          }}
        >
          {content.title[0]} <br /> {content.title[1]} <br /> {content.title[2]}
        </h1>
        <p
          style={{
            fontFamily: `${
              language === "eng" ? "Titillium Web Regular" : "calibri"
            }`,
          }}
        >
          {content.firstPar}
        </p>
        <div className={styles.btn_container}>
          <NavLink to="/about" className={styles.home_btn}>
            {content.btn} →
          </NavLink>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.table}>
          <div className={styles.thumbs}>
            <img
              src={`https://polyreactsa.blob.core.windows.net/content/1.png?sv=2020-10-02&st=2022-02-18T17%3A57%3A02Z&se=2027-01-31T17%3A57%3A00Z&sr=c&sp=r&sig=ae3fsZvxWWXaE7mTUmdiD%2Fv7p36XR6asc1GTWGs4Yyc%3D`}
              title="Shirt"
            />
            <div className={styles.caption}>
              <span className={styles.title}>The Shirt</span>
              <span className={styles.info}>
                There&apos;s the most common things from traditional costume
                that can be embroidered. The main part of a costume is truly the
                shirt. In fact most of belarisians assosiate mational costume
                with shirt alone.
              </span>
            </div>
          </div>

          <div className={styles.thumbs}>
            <img
              src={`https://polyreactsa.blob.core.windows.net/content/3.png?sv=2020-10-02&st=2022-02-18T17%3A57%3A02Z&se=2027-01-31T17%3A57%3A00Z&sr=c&sp=r&sig=ae3fsZvxWWXaE7mTUmdiD%2Fv7p36XR6asc1GTWGs4Yyc%3D`}
              title="Apron"
            />
            <div className={styles.caption}>
              <span className={styles.title}>An Apron?</span>
              <span className={styles.info}>
                What could be more useless in a daily life than an apron? Yet
                apron was necessary and obligatory to wear for any woman.
              </span>
            </div>
          </div>
          <div className={styles.thumbs}>
            <img
              src={`https://polyreactsa.blob.core.windows.net/content/2.png?sv=2020-10-02&st=2022-02-18T17%3A57%3A02Z&se=2027-01-31T17%3A57%3A00Z&sr=c&sp=r&sig=ae3fsZvxWWXaE7mTUmdiD%2Fv7p36XR6asc1GTWGs4Yyc%3D`}
              title="Head Scarf"
            />
            <div className={styles.caption}>
              <span className={styles.title}>Head Scarf</span>
              <span className={styles.info}>
                Most of you may think of babushkas first. That&apos;s actually
                true. Traditionaly after marriage every woman must have her head
                covered. Embroidered head scarfs appered when factory made
                kurchiefs were too expencive. Just an affortable replacement.
              </span>
            </div>
          </div>
          <div className={styles.table_img}>
            <HashLink to="/about#map">
              <EuroMap />
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Homepage;
