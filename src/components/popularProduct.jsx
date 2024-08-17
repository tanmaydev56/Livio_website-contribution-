;
import styles from '../styles/popularProduct.module.css';
import Stars from '../assets/images/stars.png';
import Chair from '../assets/images/chair.png';
import Table from '../assets/images/table.png';
import Chair2 from '../assets/images/chair2.png';

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.headPart1}>
          <p className={styles.popular}>Popular</p>
          <p className={styles.interiorTxt}>Perfectly Designed <br/> For Interiors</p>
        </div>
        <div className={styles.viewGallery}>
          <p>View Gallery</p>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.product1}>
          <p><img className={styles.stars} src={Stars} alt="Stars" /> (572)</p>
          <img className={styles.chair} src={Chair} alt="Chair" />
        </div>
        <div className={styles.product2}>
          <div className={styles.newProduct}>
            <p><img className={styles.stars} src={Stars} alt="Stars" /> (572)</p>
            <p className={styles.new}>New</p>
          </div>
          <img className={styles.table} src={Table} alt="Table" />
        </div>
        <div className={styles.product3}>
          <p><img className={styles.stars} src={Stars} alt="Stars" /> (572)</p>
          <img className={styles.chair2} src={Chair2} alt="Chair2" />
        </div>
      </div>
    </div>
  );
};

export default Product;
