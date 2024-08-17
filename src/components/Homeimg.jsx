import styles from "../styles/Homeimg.module.css"; // Import the CSS module

import homeImage from "../assets/New-Work.png";

const Homeimg = () => {
  return (
    <div className={styles["home-section"]}>
      <img src={homeImage} alt="Image" className={styles["home-image"]} />
      <div className={styles["text-container-10"]}>
        <p className={styles["livio"]}>LIVIO</p>
        <p className={styles["where"]}>Where Comfort Meets Style</p>
      </div>
    </div>
  );
};

export default Homeimg;
