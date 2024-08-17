import styles from '../styles/Category.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IMG1 from '../assets/images/Kitchen.png';
import IMG2 from '../assets/images/Bathroom.png';
import IMG3 from '../assets/images/Living1.png';
import IMG4 from '../assets/images/bedroom.png';
import IMG5 from '../assets/images/kitchenClick.png'
import IMG6 from '../assets/images/kitchenIcon.png'
import IMG7 from '../assets/images/bathIcon.png'
import IMG8 from '../assets/images/livingIcon.png'
import IMG9 from '../assets/images/bedroomIcon.png'

function OnlyCategory() {
    const [visibleDiv, setVisibleDiv] = useState(null);
    const handle = (divId) => {
      setVisibleDiv(visibleDiv === divId ? null : divId);
    };
  
    const handleClick = (id) => {
        setVisibleDiv(visibleDiv === id ? null : id);
        };
    return (
      <div>
        <div className={styles.CategoryCont}>
            <p className={styles.categoryHeading}>CATEGORIES</p>
            <div className={styles.ellipseBox}>
            <div className={`${styles.Category} ${styles.box1}`}
            onClick={() => handleClick('div1')}>
          <Link to="/kitchen"><img className={`${styles.ellipse}`} src={IMG1} alt="Kitchen"
                style={{
                  display: visibleDiv=== 'div1' ? 'none' : 'block' 
                }} /></Link>
          <div className={styles.onClickImage}
              style={{
                display: visibleDiv === 'div1' ? 'block' : 'none'
              }}>
            <img src={IMG5} alt="" />
            <img className={styles.icon} src={IMG6} alt="" />
          </div>
            <p>Kitchen</p>
          </div>

          <div className={`${styles.Category} ${styles.box1}`}
              onClick={() => handle('div2')}>
            <Link to="/bathroom"><img className={styles.ellipse} src={IMG2} alt="Kitchen"
                style={{
                  display: visibleDiv === 'div2' ? 'none' : 'block'
                }} /></Link>
            <div className={styles.onClickImage}
                style={{
                  display: visibleDiv === 'div2' ? 'block' : 'none'
                }}>
              <img src={IMG5} alt="" />
              <img className={styles.icon} src={IMG7} alt="" />
            </div>
            <p>Bathroom</p>
          </div>

          <div className={`${styles.Category} ${styles.box1}`}
              onClick={() => handle('div3')}>
            <Link to="/living"><img className={styles.ellipse} src={IMG3} alt="Kitchen"
                style={{
                  display: visibleDiv === 'div3' ? 'none' : 'block'
                }} /></Link>
            <div className={styles.onClickImage}
                style={{
                  display: visibleDiv === 'div3' ? 'block' : 'none'
                }}>
              <img src={IMG5} alt="" />
              <img className={styles.icon} src={IMG8} alt="" />
            </div>
            <p>Living Room</p>
          </div>

          <div className={`${styles.Category} ${styles.box1}`}
              onClick={() => handle('div4')}>
            <Link to="/bedroom"><img className={styles.ellipse} src={IMG4} alt="Kitchen"
                style={{
                  display: visibleDiv === 'div4' ? 'none' : 'block'
                }} /></Link>
            <div className={styles.onClickImage}
                style={{
                  display: visibleDiv === 'div4' ? 'block' : 'none'
                }}>
              <img src={IMG5} alt="" />
              <img className={styles.icon} src={IMG9} alt="" />
            </div>
            <p>Bedroom</p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default OnlyCategory;