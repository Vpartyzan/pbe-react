import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Rotate360 from "./R360/RotateContainer";

import styles from "./Exhibitions.module.scss";

const Exhibitions = (props) => {
  const currentLanguage = props.currentLanguage;
  const activeExhibition = props.activeExhibition;
  const [curPosition, setCurPosition] = useState(0);

  const region = props.content[0].exhibition.filter(
    (exh) => exh.id === activeExhibition
  )[0];

  const activeExhTextCont = region.content.filter(
    (content) => content.language === currentLanguage
  )[0];

  console.log(props.content[0].exhibition);

  const curImgCont = props.content[0];

  const activeExhImgCont = curImgCont.exhibition.filter(
    (exhibition) => exhibition.id === props.activeExhibition
  )[0];

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
      <div className={styles.curfoto}>
        <Rotate360 />
      </div>
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
          <ArrowDropDownIcon
            className={styles.btnDown}
            onClick={handleDown}
            fontSize="large"
          />
        </div>
      </div>

      <div className={styles.description}>
        <h3>{activeExhTextCont.title}</h3>
        <p>{activeExhTextCont.subtitle}</p>
        <p>{activeExhTextCont.paragraph}</p>
        <div className={styles.btn_container}>
          <NavLink to="/about" className={styles.btn}>
            Full Gallery →
          </NavLink>
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
