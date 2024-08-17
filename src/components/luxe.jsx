import styles from '../styles/navBar.module.css';
import IMG5 from '../assets/images/living.png';

const NavBar = () => {
  return (
      <div className={styles.box2}>
        <img className={styles.img1} src={IMG5} alt="Product" />
        <div className={styles.LuxeBox}>
          <div className={styles.headcollection}>
            <p className={styles.luxeHeading}>LUXE LOUNGER</p>
            <div className={styles.collection}>
              <p className={`${styles.newCollection} ${styles.alata}`}>New Collection</p>
              <p className={`${styles.text1}`}>Discount 50% for <br /> the first transaction</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.explore}>Explore</button>
            <button className={`${styles.shopNow} ${styles.alata}`}>SHOP NOW</button>
          </div>
        </div>
      </div>
  );
};

export default NavBar;
