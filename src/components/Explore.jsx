// src/components/Explore.js
import React from "react";
import styles from "../styles/Explore.module.css"; // Import the CSS module
import image1 from "../assets/Screenshot1.png";
import image2 from "../assets/abcde.png";
import image3 from "../assets/Screenshot2.png";

const Explore = () => {
  return (
    <div className={styles["explore-container"]}>
      <div className={styles["explore-flex"]}>
        {/* First line: 1*2 flex */}
        <div className={styles["flex-row"]}>
          <img src={image1} alt="Product 1" className={styles["flex-item-img1"]} />
          <div className={styles["flex-item"]}>
            <div className={styles["explore-text"]}>
              <p>LUXE LOUNGER</p>
              <button className={styles["explore-btn"]}>Explore</button>
            </div>
          </div>
        </div>
        {/* Second line: 1*1 flex */}
        <div className={`${styles["flex-row"]} ${styles["block-row"]}`}>
          <img src={image2} alt="Product 2" className={styles["flex-item-img2"]} />
        </div>
        {/* Third line: 1*2 flex */}
        <div className={styles["flex-row"]}>
          <div className={styles["flex-item"]}>
            <div className={styles["explore-text-2"]}>
              <p>VELVET MONARCH</p>
              <button className={styles["check-btn"]}>Check it out</button>
            </div>
          </div>
          <img src={image3} alt="Product 3" className={styles["flex-item-img3"]} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
