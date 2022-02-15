import React from "react";
import PropTypes from "prop-types";

import styles from "./About.module.scss";

const About = (props) => {
  const content = props.textContent[0].about;
  const language = props.textContent[0].language;

  return (
    <div className={styles.container}>
      <div>
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
        <img src="https://i.postimg.cc/dtrFDW8n/pexels-rodnae-productions-8474810.jpg" />
      </div>
    </div>
  );
};

About.propTypes = {
  textContent: PropTypes.array.isRequired,
};

export default About;
