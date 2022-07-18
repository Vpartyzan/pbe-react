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
            currentLanguage === "eng" ? "MyriadProRegular" : "calibri b"
          }`,
        }}
      >
        <p>{content.contact.first}</p>
        <a href="https://www.instagram.com/skarodzitsa/">
          {content.contact.firstName}
        </a>
        <p>{content.contact.second}</p>
        <a href="https://www.linkedin.com/in/maksim-cichanau-3108031a7/">
          {content.contact.secondName}
        </a>
        {/* <p>photo</p>
        <a href="https://www.instagram.com/piatruha/">
          https://www.instagram.com/piatruha/
        </a> */}
        <p>{content.contact.fourth}</p>
        <a> {content.contact.fourthName}</a>
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  content: PropTypes.array,
};
