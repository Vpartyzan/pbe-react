import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import Rotate360 from "./R360/RotateContainer";

import styles from "./Exhibitions.module.scss";

const Exhibitions = (props) => {
  const currentLanguage = props.currentLanguage;
  const activeExhibition = props.activeExhibition;
  const [curPosition, setCurPosition] = useState(0);
  const [curHorizPosition, setCurHorizPosition] = useState(0);

  const region = props.content[0].exhibition.filter(
    (exh) => exh.id === activeExhibition
  )[0];

  const activeExhTextCont = region.content.filter(
    (content) => content.language === currentLanguage
  )[0];

  const curImgCont = props.content[0];

  const activeExhImgCont = curImgCont.exhibition.filter(
    (exhibition) => exhibition.id === props.activeExhibition
  )[0];

  const handleUp = function () {
    let height = 128;
    let position = curPosition + height;

    position = Math.min(position, 0);

    setCurPosition(position);
  };

  const handleDown = function () {
    let height = 128;
    // let count = 5;
    // let wrapLenght = 6;
    let position = curPosition - height;

    // position = Math.max(position, -height * (wrapLenght - count));

    setCurPosition(position);
  };

  const handleLeft = function () {
    let width = 50;
    let position = curHorizPosition + width;

    position = Math.min(position, 0);

    setCurHorizPosition(position);
  };

  const handleRight = function () {
    let width = 50;
    // let count = 4;
    // let wrapLenght = 5;
    let position = curHorizPosition - width;

    // position = Math.max(position, -width * (wrapLenght - count));
    setCurHorizPosition(position);
  };

  return (
    <div className={styles.container}>
      <div className={styles.curfoto}>
        <Rotate360 />

        <div className={styles.allfoto}>
          <div className={styles.carusel}>
            <ArrowDropUpIcon
              onClick={handleUp}
              className={styles.vertical}
              style={{
                visibility: `${curPosition === 0 ? "hidden" : "visible"}`,
              }}
              fontSize="large"
            />

            <ArrowLeftIcon
              className={styles.horisontal}
              style={{
                visibility: `${curHorizPosition === 0 ? "hidden" : "visible"}`,
              }}
              fontSize="large"
              onClick={handleLeft}
            />

            <div id="gallery" className={styles.gallery}>
              <ul
                className={styles.wrapper}
                style={{
                  marginTop: `${curPosition}px`,
                  marginLeft: `${curHorizPosition}px`,
                }}
              >
                {curImgCont.exhibition.map((item) => (
                  <li key={item.id}>
                    <img
                      className={
                        item.id === props.activeExhibition ? styles.active : ""
                      }
                      src={item.image}
                      onClick={() => {
                        props.changeExhibition(item.id);
                        props.changeAmountImage(item.amountImg);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <ArrowRightIcon
              className={styles.horisontal}
              fontSize="large"
              onClick={handleRight}
            />

            <ArrowDropDownIcon
              className={styles.vertical}
              onClick={handleDown}
              fontSize="large"
            />
          </div>
        </div>
      </div>

      <div className={styles.description}>
        <h3
          style={{
            fontFamily: `${
              currentLanguage === "eng" ? "Titillium Web Bold" : "calibrib"
            }`,
          }}
        >
          {activeExhTextCont.title}
        </h3>
        <p
          style={{
            fontFamily: `${
              currentLanguage === "eng" ? "Titillium Web Regular" : "calibri"
            }`,
          }}
        >
          {activeExhTextCont.subtitle}
        </p>
        <p
          style={{
            fontFamily: `${
              currentLanguage === "eng" ? "Titillium Web Regular" : "calibri"
            }`,
          }}
        >
          {activeExhTextCont.paragraph}
        </p>
        <div className={styles.btn_container}>
          <HashLink to="/about#map" className={styles.btn}>
            Full Gallery →
          </HashLink>
        </div>
      </div>
    </div>
  );
};

Exhibitions.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  currentRegion: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  changeExhibition: PropTypes.func.isRequired,
  changeAmountImage: PropTypes.func.isRequired,
  activeExhibition: PropTypes.number.isRequired,
};

export default Exhibitions;
