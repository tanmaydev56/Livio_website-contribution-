
;
import styles from '../styles/founder.module.css';
import homeImage1 from '../assets/images/unsplash.png';

const Founder = () => {
  return (
    <div className={styles.home_section}>
      <img src={homeImage1} alt='Image' className={styles.home_image} />
      <div className={styles.text_container_10}>
        <div className={styles.homeText}>
          It's time to
        </div>
        <div className={styles.homeText2}>
          know us
        </div>
      </div>


    </div>
  );
}


export default Founder;


