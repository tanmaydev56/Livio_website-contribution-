import styles from '../styles/KitchenCards.module.css'
import BedroomCard from '../assets/images/bedroomPic.png'
const BedroomCards=()=>{
    return(
        <>
         <div className={styles.collectionsBox}>
      <div className={styles.text}>
        <p className={styles.textHead}>Collections</p>
        <p className={styles.type}>Bedroom</p>
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
                <img src={BedroomCard} alt="" />
                <p 
                    className={styles.cardHead}>Classic Room
                </p>
                <p 
                      className={styles.cardPrice}>From $299
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
                <img src={BedroomCard} alt="" />
                <p 
                    className={styles.cardHead}>Double Room
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
                <img src={BedroomCard} alt="" />
                <p 
                    className={styles.cardHead}>Super Room
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
export default BedroomCards;