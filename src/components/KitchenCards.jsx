import styles from '../styles/KitchenCards.module.css'
import KitchenCard from '../assets/images/kitchenCard.png'
const KitchenCards=()=>{
    return(
        <>
         <div className={styles.collectionsBox}>
      <div className={styles.text}>
        <p className={styles.textHead}>Collections</p>
        <p className={styles.type}>Kitchen</p>
      </div>
      <div className={styles.cardGroup}>
        <div className={styles.group1}>
       <div className={styles.boxShadow}>
        <div 
            className={styles.card3}>
          <div 
            className={styles.card2}>
            <div 
                className={styles.card1}>
              <div className={styles.content}>
                <img src={KitchenCard} alt="" />
                <p 
                    className={styles.cardHead}>Traditional Kitchen
                </p>
                <p 
                      className={styles.cardPrice}>From $499
                </p>
                <button 
                          className={styles.cardButton}>Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
       </div>
        </div>
        <div className={styles.group1}>
        <div className={styles.boxShadow}>
        <div 
            className={styles.card3}>
          <div 
            className={styles.card2}>
            <div 
                className={styles.card1}>
              <div className={styles.content}>
                <img src={KitchenCard} alt="" />
                <p 
                    className={styles.cardHead}>Modern Kitchen
                </p>
                <p 
                      className={styles.cardPrice}>From $499
                </p>
                <button 
                          className={styles.cardButton}>Book Now
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
       
        </div>
        <div className={styles.group1}>
        <div className={styles.boxShadow}>
        <div 
            className={styles.card3}>
          <div 
            className={styles.card2}>
            <div 
                className={styles.card1}>
              <div className={styles.content}>
                <img src={KitchenCard} alt="" />
                <p 
                    className={styles.cardHead}>Rustic Kitchen
                </p>
                <p 
                      className={styles.cardPrice}>From $399
                </p>
                <button 
                          className={styles.cardButton}>Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        </div>
      </div>
    </div>
        </>
    )
}
export default KitchenCards;