// import React from "react";
import styles from "../styles/Custom.module.css"; // Importing the CSS module
import Image101 from "../assets/Rectangle 119.png"; // Adjust the path to your first image
import Image102 from "../assets/Rectangle 121.png"; // Adjust the path to your second image

const Custom = () => {
  return (
    <div className={styles["custom-container"]}>
      <div className={styles["image-and-text"]}>
        <div className={styles["background-container"]}></div>
        <div className={styles["image-container"]}>
          <img src={Image101} alt="Custom" className={styles["custom-image"]} />
        </div>
      </div>
      <div className={styles["para-div"]}>
        <p className={styles.para}>
          We believe that your home should be a reflection of your unique
          personality and style. That's why we offer a wide range of
          customizable furniture options that allow you to create a living
          space that is truly your own.
        </p>
      </div>
      <div className={styles["text-container"]}>
        <p>
          CUSTOM<span className={styles.highlight}>IZE</span> <br /> YOUR <br /> HOME
        </p>
      </div>
      <div className={styles["image-and-text1"]}>
        <div className={styles["background-container1"]}></div>
        <div className={styles["image-container1"]}>
          <img src={Image102} alt="Custom" className={styles["custom-image1"]} />
        </div>
      </div>
    </div>
  );
};

export default Custom;
