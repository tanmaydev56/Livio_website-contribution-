import styles from '../styles/Collection.module.css';

const Collection = (props) => {
  if(props.background==="#2A2A34"){
    var headColor="#FFF";
    var priceColor="#FFF";
    var buttonColor="#F47D4A";
    var buttonText="#FFF"
  }
  if(props.background1==="#2A2A34"){
    var headColor1="#FFF";
    var priceColor1="#FFF";
    var buttonColor1="#F47D4A";
    var buttonText1="#FFF"
  }
  if(props.background2==="#2A2A34"){
    var headColor2="#FFF";
    var priceColor2="#FFF";
    var buttonColor2="#F47D4A";
    var buttonText2="#FFF"
  }
  return (
    <div className={styles.collectionsBox}>
      <div className={styles.text}>
        <p className={styles.textHead} style={{
          display:props.display
        }}>Collections</p>
        <p style={{
            ...(props.display === "none" ? { fontSize: '45px', paddingLeft: '120px' } : {})
          }} className={styles.type}>{props.type}</p>
      </div>
      <div className={styles.cardGroup}>
        <div className={styles.group1}>
        <div className={styles.boxShadow}>
        <div style={{
              background:props.background
            }}
            className={styles.card3}>
          <div style={{
              background:props.background
            }}
            className={styles.card2}>
            <div style={{
                background:props.background
                }}
                className={styles.card1}>
              <div className={styles.content}>
                <img src={props.image} alt="" />
                <p style={{
                      color:headColor
                    }}
                    className={styles.cardHead}>{props.head}
                </p>
                <p style={{
                        color:priceColor
                      }}
                      className={styles.cardPrice}>{props.price}
                </p>
                <button style={{
                            background:buttonColor,
                            color:buttonText
                          }}
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
        <div style={{
              background:props.background1
            }}
            className={styles.card3}>
          <div style={{
              background:props.background1
            }}
            className={styles.card2}>
            <div style={{
                background:props.background1
                }}
                className={styles.card1}>
              <div className={styles.content}>
                <img src={props.image} alt="" />
                <p style={{
                      color:headColor1
                    }}
                    className={styles.cardHead}>{props.head1}
                </p>
                <p style={{
                        color:priceColor1
                      }}
                      className={styles.cardPrice}>{props.price1}
                </p>
                <button style={{
                            background:buttonColor1,
                            color:buttonText1
                          }}
                          className={styles.cardButton}>Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
       </div>
        </div>
        <div className={`${styles.group1} ${styles.extra}`}>
        <div className={styles.boxShadow}>
        <div style={{
              background:props.background2
            }}
            className={styles.card3}>
          <div style={{
              background:props.background2
            }}
            className={styles.card2}>
            <div style={{
                background:props.background2
                }}
                className={styles.card1}>
              <div className={styles.content}>
                <img src={props.image} alt="" />
                <p style={{
                      color:headColor2
                    }}
                    className={styles.cardHead}>{props.head2}
                </p>
                <p style={{
                        color:priceColor2
                      }}
                      className={styles.cardPrice}>{props.price2}
                </p>
                <button style={{
                            background:buttonColor2,
                            color:buttonText2
                          }}
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
  );
};

export default Collection;
