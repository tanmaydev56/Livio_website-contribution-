;
import styles from '../styles/FounderInfo.module.css';
import alex from '../assets/images/portrait.svg'
const FounderInfo = () => {
  return (
    <>
    <div className={styles.FounderPage}>
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <p className={styles.grid_text1}>Welcome to Livio, where exceptional craftsmanship meets timeless design. At Livio, we believe that furniture should be more than just functional-it should be a reflection of your style and personality. Our team is dedicated to creating beautiful, high-quality pieces that transform spaces into homes.</p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.grid_item}>
          <p className={styles.grid_text1}>At Livio, our goal is to redefine the furniture shopping experience by offering exceptional quality, innovative designs, and personalized service. We strive to create furniture that not only enhances the beauty and functionality of your home but also reflects your unique style and personality.</p>
        </div>
      </div>
    </div>
    <div className={styles.alexFounder}>
      <div className={styles.info}>
        <p className={styles.headingAlex}>Alex Donovan, Founder</p>
        <p className={styles.info2}>Livio was founded by Alex Donovan, a visionary designer with a passion for innovation and a commitment to excellence. With over two decades of experience in the furniture industry, Alex started Livio to offer a diverse range of contemporary and classic furniture to suit every taste.</p>
        <p>

        </p>
      </div>
      <img className={styles.alexImg} src={alex}/>
    </div>
    </>
  );
}

export default FounderInfo;
