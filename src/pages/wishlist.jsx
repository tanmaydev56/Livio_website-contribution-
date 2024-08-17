import {useState} from 'react';
import styles from '../styles/Wishlist.module.css';
import IMG1 from '../assets/images/wish1.png';
import IMG2 from '../assets/images/wish2.png';
import IMG3 from '../assets/images/wish3.png';
import IMG4 from '../assets/images/wish4.png';
import IMG5 from '../assets/images/wish5.png';
import IMG6 from '../assets/images/wish6.png';

function Wishlist(){

    const [isVisible, setIsVisible] = useState({
        card1: true,
        card2: true,
        card3: true,
        card4: true,
        card5: true,
        card6: true
      });

      const toggleVisibility = (cardId) => {
        setIsVisible(prevState => ({ ...prevState, [cardId]: !prevState[cardId] }));
      };

      const sum = Object.values(isVisible).filter(value => value).length;
    return(
        <div className={styles.wishlistCont}>
            <div className={styles.flexBoxx}>
                <p className={styles.wishHead}>Wishlist</p>
                <p>{sum} Items</p>
            </div>
            <div className={`${styles.flexBox} ${styles.col}`}>
                <div className={`${styles.flexBox1} ${styles.row}`}>
                    <div style={{ display: isVisible.card1 ? 'block' : 'none' }}
                        className={styles.card}>
                        <img src={IMG1} alt="product" />
                        <div className={styles.cardBody}>
                            <p className={styles.cardHead}>Luxury Chair</p>
                            <p className={styles.cardDesc}>Recline upon the plush seat, design for optimal
                            comfort and support. With its sturdy......</p>
                            <p className={styles.price}>$100</p>
                            <button>Move To Cart</button>
                            <p onClick={() => toggleVisibility('card1')} className={styles.remove}><span>X</span> Remove</p>
                        </div>
                    </div>
                    <div style={{ display: isVisible.card2 ? 'block' : 'none' }}
                    className={styles.card}>
                        <img src={IMG2} alt="product" />
                        <div className={styles.cardBody}>
                            <p className={styles.cardHead}>Bar Stool</p>
                            <p className={styles.cardDesc}>Recline upon the plush seat, design for optimal
                            comfort and support. With its sturdy......</p>
                            <p className={styles.price}>$100</p>
                            <button>Move To Cart</button>
                            <p onClick={() => toggleVisibility('card2')} className={styles.remove}><span>X</span> Remove</p>
                        </div>
                    </div>
                    <div style={{ display: isVisible.card3 ? 'block' : 'none' }}
                    className={styles.card}>
                        <img src={IMG3} alt="product" />
                        <div className={styles.cardBody}>
                            <p className={styles.cardHead}>Swinging Chair</p>
                            <p className={styles.cardDesc}>Recline upon the plush seat, design for optimal
                            comfort and support. With its sturdy......</p>
                            <p className={styles.price}>$100</p>
                            <button>Move To Cart</button>
                            <p onClick={() => toggleVisibility('card3')} className={styles.remove}><span>X</span> Remove</p>
                        </div>
                    </div>

                </div>
                <div className={`${styles.flexBox1} ${styles.row}`}>
                    <div style={{ display: isVisible.card4 ? 'block' : 'none' }}
                    className={styles.card}>
                        <img className={styles.big} src={IMG4} alt="product" />
                        <div className={styles.cardBody}>
                            <p className={styles.cardHead}>Luxury Sofa</p>
                            <p className={styles.cardDesc}>Recline upon the plush seat, design for optimal
                            comfort and support. With its sturdy......</p>
                            <p className={styles.price}>$100</p>
                            <button>Move To Cart</button>
                            <p onClick={() => toggleVisibility('card4')} className={styles.remove}><span>X</span> Remove</p>
                        </div>
                    </div>
                    <div style={{ display: isVisible.card5 ? 'block' : 'none' }}
                    className={styles.card}>
                        <img src={IMG5} alt="product" />
                        <div className={styles.cardBody}>
                            <p className={styles.cardHead}>Rocking Chair</p>
                            <p className={styles.cardDesc}>Recline upon the plush seat, design for optimal
                            comfort and support. With its sturdy......</p>
                            <p className={styles.price}>$100</p>
                            <button>Move To Cart</button>
                            <p onClick={() => toggleVisibility('card5')} className={styles.remove}><span>X</span> Remove</p>
                        </div>
                    </div>
                    <div style={{ display: isVisible.card6 ? 'block' : 'none' }}
                    className={styles.card}>
                        <img src={IMG6} alt="product" />
                        <div className={styles.cardBody}>
                            <p className={styles.cardHead}>Centre Table</p>
                            <p className={styles.cardDesc}>Recline upon the plush seat, design for optimal
                            comfort and support. With its sturdy......</p>
                            <p className={styles.price}>$100</p>
                            <button>Move To Cart</button>
                            <p onClick={() => toggleVisibility('card6')} className={styles.remove}><span>X</span> Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;