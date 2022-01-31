import React from "react";

import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Polychrome Belarusian Embroidery</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Morbi blandit cursus risus at
          ultrices. Non nisi est sit amet facilisis magna etiam tempor orci.
        </h3>
        <p>
          Curabitur vitae nunc sed velit dignissim. Et leo duis ut diam quam
          nulla porttitor massa id. Nibh sed pulvinar proin gravida hendrerit.
          Nulla facilisi cras fermentum odio eu feugiat pretium. Convallis
          posuere morbi leo urna molestie at. Morbi blandit cursus risus at
          ultrices. Non nisi est sit amet facilisis magna etiam tempor orci.
          Ornare quam viverra orci sagittis eu volutpat odio facilisis. Et
          ligula ullamcorper malesuada proin. Nisl condimentum id venenatis a
          condimentum vitae sapien pellentesque habitant. Odio aenean sed
          adipiscing diam donec adipiscing tristique risus.
        </p>
        <p>
          Eros donec ac odio tempor orci dapibus ultrices. Hac habitasse platea
          dictumst quisque sagittis purus sit amet. Elementum nisi quis eleifend
          quam adipiscing vitae proin sagittis nisl. Scelerisque eleifend donec
          pretium vulputate sapien nec sagittis aliquam.
        </p>
      </div>
      <div className={styles.table_img}>
        <img src="https://i.postimg.cc/dtrFDW8n/pexels-rodnae-productions-8474810.jpg" />
      </div>
    </div>
  );
};

export default About;
