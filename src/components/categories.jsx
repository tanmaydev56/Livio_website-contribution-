import dividerImg from "../assets/Line-img.png";
import kitchenImg from "../assets/kitchen-img.png";
import bathroomImg from "../assets/bathroom-img.png";
import livingRoomImg from "../assets/livingRoom-img.png";
import bedroomImg from "../assets/bedroom-img.png";
import banner1 from "../assets/luxurious-img.png";
import banner2 from "../assets/banner-2.png";
import feature1 from "../assets/customerCare-img.png";
import feature2 from "../assets/delivery-img.png";
import feature3 from "../assets/100K-img.png";
import styles from "../styles/categories.module.css"; // Importing CSS module

const Categories = () => {
  return (
    <div className={styles.categories}>
      <h1 className={styles.categoriesHeading}>CATEGORIES</h1>
      <p className={styles.categoriesPara}>
        Elevate your home with our comprehensive furniture collection, Crafted
        for quality and style, our pieces transform every corner into a
        personalized sanctuary, reflecting your unique taste and lifestyle.
      </p>
      <img src={dividerImg} alt="Divider" className={styles["divider-img"]} />
      <div className={styles["categories-container"]}>
        <div className={styles.kitchen}>
          <img src={kitchenImg} alt="kitchen" />
          <p>Kitchen</p>
        </div>
        <div className={styles.kitchen}>
          <img src={bathroomImg} alt="Bathroom" />
          <p>Bathroom</p>
        </div>
        <div className={styles.kitchen}>
          <img src={bedroomImg} alt="Bedroom" />
          <p>Bedroom</p>
        </div>
        <div className={styles.kitchen}>
          <img src={livingRoomImg} alt="Living Room" />
          <p>Living Room</p>
        </div>
      </div>
      <div className={styles.banners}>
        <img src={banner1} alt="Banner 1" />
      </div>
      <div className={styles["banner-2"]}>
        <div className={styles["text-container-3"]}>
          <div className={styles["new-launch"]}>NEW LAUNCH!!!</div>
          <p className={styles["main-text"]}>
            Transform your home with ease at Hang Furniture's mega sale! Find
            everything you need for a complete makeover all in one place.
          </p>
          <a href="#" className={styles["book-now-button"]}>
            BOOK NOW!
          </a>
          <div className={styles["discount-banner"]}>
            <div className={styles["text-container-4"]}>
              <div className={styles["text-group"]}>
                <span className={styles.get}>GET</span>
                <span className={styles.instant}>INSTANT</span>
              </div>
              <span className={styles.percentage}>20%</span>
              <span className={styles.off}>OFF</span>
            </div>
          </div>
        </div>
        <img
          src={banner2}
          className={styles["ban-img-2"]}
          alt="Banner Image 2"
        />
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <img src={feature1} alt="24/7 Customer Care" />
          <p className={styles["feature-text"]}>
            <strong>
              24/7 <br />
              Customer Care
            </strong>
          </p>
        </div>
        <div className={styles.feature}>
          <img src={feature2} alt="Quick & Safe Delivery" />
          <p className={styles["feature-text"]}>
            <strong>Quick & Safe Delivery</strong>
          </p>
        </div>
        <div className={styles.feature}>
          <img src={feature3} alt="100K+ Buyers & 1K+ Sellers" />
          <p className={styles["feature-text"]}>
            <strong>100K+ Buyers & 1K+ Sellers</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the component as default
export default Categories;
