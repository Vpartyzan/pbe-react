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
          src="https://www.youtube-nocookie.com/embed/JagemrPoeGU?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&fs=0&controls=0&disablekb=1"
          width="800"
          height="450"
          frameBorder="0"
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
