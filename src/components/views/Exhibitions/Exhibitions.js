import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Rotate360 from "./R360/RotateContainer";

import styles from "./Exhibitions.module.scss";

const Exhibitions = (props) => {
  const [curPosition, setCurPosition] = useState(0);

  const currentTextContent = props.textContent[0].regions.filter(
    (region) => region.name === props.currentRegion
  )[0];

  const activeExhTextCont = currentTextContent.exhibition.filter(
    (exhibition) => exhibition.id === props.activeExhibition
  )[0];

  const curImgCont = props.imageContent.regions.filter(
    (region) => region.name === props.currentRegion
  )[0];

  const activeExhImgCont = curImgCont.exhibitions.filter(
    (exhibition) => exhibition.id === props.activeExhibition
  )[0];

  console.log("Ex", activeExhTextCont);

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
        <Rotate360
          amountImg={activeExhImgCont ? +activeExhImgCont.amountImg : ""}
        />
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
              {curImgCont.exhibitions.map((item) => (
                <li key={item.id}>
                  <img
                    className={
                      item.id === props.activeExhibition ? styles.active : ""
                    }
                    src={item.image}
                    onClick={() => props.changeExhibition(item.id)}
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
        <h3>{activeExhTextCont.description.title}</h3>
        <p>{activeExhTextCont.description.subtitle}</p>
        <p>{activeExhTextCont.description.paragraph}</p>
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
  currentRegion: PropTypes.string.isRequired,
  textContent: PropTypes.array.isRequired,
  imageContent: PropTypes.object.isRequired,
  changeExhibition: PropTypes.func.isRequired,
  activeExhibition: PropTypes.number.isRequired,
};

export default Exhibitions;
