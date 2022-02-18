import React from "react";
import PropTypes from "prop-types";

import Map from "../Map/MapContainer";

import styles from "./About.module.scss";

const About = (props) => {
  const content = props.textContent[0].about;
  const language = props.textContent[0].language;

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1
          style={{
            fontFamily: `${
              language === "eng" ? "Microsoft JhengHei light" : "FreeSet"
            }`,
          }}
        >
          {content.title}
        </h1>
        <h3
          style={{
            fontFamily: `${
              language === "eng" ? "Microsoft JhengHei Bold" : "calibrib"
            }`,
          }}
        >
          {content.subtitle}
        </h3>
        <p
          style={{
            fontFamily: `${
              language === "eng" ? "Microsoft JhengHei" : "calibri"
            }`,
          }}
        >
          {content.firstPar}
        </p>
        <p
          style={{
            fontFamily: `${
              language === "eng" ? "Microsoft JhengHei" : "calibri"
            }`,
          }}
        >
          {content.secondPar}
        </p>
      </div>
      <div className={styles.table_img}>
        {/* <img src="https://i.postimg.cc/dtrFDW8n/pexels-rodnae-productions-8474810.jpg" /> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JagemrPoeGU?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Map />
    </div>
  );
};

About.propTypes = {
  textContent: PropTypes.array.isRequired,
};

export default About;
