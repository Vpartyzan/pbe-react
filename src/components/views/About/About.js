import React from "react";
import PropTypes from "prop-types";

import styles from "./About.module.scss";

const About = (props) => {
  const content = props.textContent[0].about;

  return (
    <div className={styles.container}>
      <div>
        <h1>{content.title}</h1>
        <h3>{content.subtitle}</h3>
        <p>{content.firstPar}</p>
        <p>{content.secondPar}</p>
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
