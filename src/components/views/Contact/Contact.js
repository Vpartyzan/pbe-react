import React from "react";
import PropTypes from "prop-types";

import styles from "./Contact.module.scss";

const Contact = (props) => {
  const currentLanguage = props.currentLanguage;
  const content = props.content[0];

  return (
    <div className={styles.container}>
      <div
        className={styles.table}
        style={{
          fontFamily: `${
            currentLanguage === "eng" ? "MyriadProRegular" : "calibrib"
          }`,
        }}
      >
        <h4>{content.contact.first}</h4>
        <a href="https://www.instagram.com/skarodzitsa/">
          {content.contact.firstName}
        </a>
        <h4>{content.contact.second}</h4>
        <a href="https://www.linkedin.com/in/maksim-cichanau-3108031a7/">
          {content.contact.secondName}
        </a>
        <h4>{content.contact.third}</h4>
        <a href="https://www.instagram.com/piatruha/">
          {content.contact.thirdName}
        </a>
        <h4>{content.contact.fourth}</h4>
        <a href="mailto:Makrida@gmail.com">{content.contact.fourthName}</a>
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  content: PropTypes.array,
};
