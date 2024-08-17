// GridComponent.js

import React from "react";
import styles from "../styles/GridComponent.module.css"; // Import the CSS module

const GridComponent = () => {
  return (
    <>
      <div className={styles["grid-container"]}>
        <div className={styles["grid-item-1"]}>
          <h1 className={styles["grid-heading"]}>ABOUT US</h1>
          <p className={styles["grid-text"]}>
            Welcome to Livio! We specialize in creating high-quality, stylish
            furniture that enhances your living spaces. Our designs combine
            modern aesthetics with timeless elegance, crafted with care and
            sustainability in mind. Discover comfort and sophistication with
            Livio.
          </p>
        </div>
        <div className={styles["separator"]}></div>
        <div className={styles["grid-item-2"]}>
          <h1 className={styles["grid-heading-2"]}>OUR MISSION</h1>
          <p className={styles["grid-text"]}>
            At Livio, our mission is to deliver beautiful, durable, and
            affordable furniture. We are dedicated to quality craftsmanship,
            innovative design, eco-friendly practices, and exceptional customer
            service to transform your house into a home.
          </p>
        </div>
      </div>
      <div className={styles["center-button-container"]}>
        <a href="#" className={styles["learn-more-button"]}>
          Learn more
        </a>
      </div>
    </>
  );
};

export default GridComponent;
