import styles from "../styles/sofas.module.css"
import Sofa from "../assets/images/imageSofa.png"
import off from "../assets/images/Label.png"

import money from "../assets/images/money.png"
import gift from "../assets/images/gift.png"
import fan from "../assets/images/fan.png"
import van from "../assets/images/van.png"
const Sofas=()=>{
    return(
        <>
        <div  style={{
            marginLeft:"150px"
        }} className={styles.containerBox}>
            <div className={styles.imgBox}>
        <img src={Sofa}/>
        <div className={styles.armcha}>
            <div className={styles.salesOff}>
                <p className={styles.saleOff}> Sale Off</p>
                <img className={styles.off}src={off}/>
            </div>
            <p className={styles.sofasHead}>Sofas and Armcha</p>
            <p className={styles.info2}>Relax, get comfortable and let yourself go. Once you try one of these sofas and armchairs you won't want any others. May the style be with you!</p>
            <button className={styles.exploreItems}>EXPLORE ALL ITEMS<img style={{marginLeft:"20px",marginBottom:"-10px"}}/></button>
        </div>

            </div>
            <div className={styles.details}>
                <div className={styles.free}>
                    <img className={styles.supportIcons} src={van}/>
                    <div className={styles.box}><p style={{margin:"0px",color: "#171A1F",
fontFamily: "Alata",
fontSize: "16px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "20px"}}>FREE SHIPPING</p>
                    <p style={{margin:"0px",color: "#565E6C",
fontFamily: "Alata",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "16px"}}>Free shipping on all us order</p>
                    </div>
                </div>
                <div className={styles.divider}><hr/></div>
                <div className={styles.free}>
                    <img className={styles.supportIcons} src={fan}/>
                    <div className={styles.box}><p style={{margin:"0px",color: "#171A1F",
fontFamily: "Alata",
fontSize: "16px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "20px"}}>SUPPORT 24/7</p>
                    <p style={{margin:"0px",color: "#565E6C",
fontFamily: "Alata",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "16px"}}>We support 24 hours a day</p>
                    </div>
                </div>
                <div className={styles.divider}><hr/></div>
                <div className={styles.free}>
                    <img className={styles.supportIcons} src={gift}/>
                    <div className={styles.box}><p style={{margin:"0px",color: "#171A1F",
fontFamily: "Alata",
fontSize: "16px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "20px"}}>GIFT CARDS</p>
                    <p style={{margin:"0px",color: "#565E6C",
fontFamily: "Alata",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "16px"}}>Give perfect gift</p>
                    </div>
                </div>
                <div className={styles.divider}><hr/></div>
                <div className={styles.free}>
                    <img className={styles.supportIcons} src={money}/>
                    <div className={styles.box}><p style={{margin:"0px",color: "#171A1F",
fontFamily: "Alata",
fontSize: "16px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "20px"}}>PAYMENT 100% SECURE</p>
                    <p style={{margin:"0px",color: "#565E6C",
fontFamily: "Alata",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "16px"}}>Payment 100% secure</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sofas;