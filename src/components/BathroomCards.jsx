import styles from '../styles/KitchenCards.module.css'
import BathroomCard from '../assets/images/bathroomPic.png'
const BathroomCards=()=>{
    return(
        <>
         <div className={styles.collectionsBox}>
      <div className={styles.text}>
      <p className={styles.textHead}>Collections</p>
        <p className={styles.type}>Bathroom</p>
      </div>
      <div className={styles.cardGroup}>
        <div className={styles.group1}  >
       <div className={styles.boxShadow}>
        <div 
            className={styles.card3} style={{background:"#2A2A34" ,color:" #FAFAFA"}} >
          <div 
            className={styles.card2} style={{background:"#2A2A34"}}>
            <div 
                className={styles.card1} style={{background:"#2A2A34"}}>
              <div className={styles.content}>
                <img src={BathroomCard} alt="" />
                <p 
                    className={styles.cardHead} style={{color:" #FAFAFA"}}>Luxury Bathroom
                </p>
                <p 
                      className={styles.cardPrice} style={{color:" #FAFAFA"}}>From $699
                </p>
                <button 
                          className={styles.cardButton} style={{background: "#FF7E48"}}>Book Now
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
                <img src={BathroomCard} alt="" />
                <p 
                    className={styles.cardHead}>Smart Bathroom
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
                <img src={BathroomCard} alt="" />
                <p 
                    className={styles.cardHead}>Modern Bathroom
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
export default BathroomCards;