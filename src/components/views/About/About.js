import React from "react";
import PropTypes from "prop-types";

import Map from "../Map/MapContainer";

import styles from "./About.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const About = (props) => {
  const content = props.content[0].about;
  const language = props.content[0].language;

  return (
    <div className={styles.container}>
      <section className={styles.aboutSection}>
        <div className={styles.text}>
          <h1
            style={{
              fontFamily: `${
                language === "eng" ? "Titillium Web Bold" : "calibrib"
              }`,
            }}
          >
            {content.title}
          </h1>
          <h3
            style={{
              fontFamily: `${
                language === "eng" ? "Titillium Web Bold" : "calibrib"
              }`,
            }}
          >
            {content.subtitle}
          </h3>
          <p
            style={{
              fontFamily: `${
                language === "eng" ? "Titillium Web Regular" : "calibri"
              }`,
            }}
          >
            {content.firstPar}
          </p>
          <p
            style={{
              fontFamily: `${
                language === "eng" ? "Titillium Web Regular" : "calibri"
              }`,
            }}
          >
            {content.secondPar}
          </p>
        </div>
        <div className={styles.table_img}>
          {/* <img src="https://i.postimg.cc/dtrFDW8n/pexels-rodnae-productions-8474810.jpg" /> */}
          <iframe
            src="https://www.youtube-nocookie.com/embed/JagemrPoeGU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&controls=0&disablekb=1"
            width="60%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
      <section className={styles.mapSection}>
        <div id={"map"} className={styles.map}>
          <Map />
        </div>
      </section>
    </div>
  );
};

About.propTypes = {
  content: PropTypes.array.isRequired,
};

export default About;
