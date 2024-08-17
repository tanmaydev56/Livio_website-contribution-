import { RiFacebookLine,  RiLinkedinLine } from 'react-icons/ri';
import {TbBrandTwitter} from 'react-icons/tb'
import {FaInstagram} from 'react-icons/fa6'
import { VscSend } from "react-icons/vsc";
import styles from '../styles/BlackBox.module.css';
import Qrcode from '../assets/images/QrCode.png';
import Apple from '../assets/images/AppStore.png';
import Google from '../assets/images/GooglePlay.png';
// import styles from './BlackBox.module.css'
const BlackBox =({ isShifted })=>{
    const blackBoxClass = `${styles.blackBox} ${isShifted ? styles.shifted : ''}`;
    return(
        <>
          <div className={blackBoxClass}>
            <div className={styles.content}>
              <div className={styles.navHead}>
                <a href="/" className={styles.underline}>HOME</a>
                <a href="/categories" className={styles.underline}>COLLECTONS</a>
                <a href="#" className={styles.underline}>ABOUT</a>
                <a href="/product" className={styles.underline}>PRODUCT</a>
                <a href="#" className={styles.underline}>SERVICES</a>
                <a href="#" className={styles.underline}>CONTACT</a>
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.flexContainer1}>
                  <div className={styles.Exclusive}>
                    <p className={styles.exc}>Exclusive</p>
                    <p className={styles.sub}>Subscribe</p>
                    <p className={styles.txt1}>Get 10% off your first order</p>
                    
                    <div className={styles.mailInput}>
                      <input type="email" placeholder='Enter your Email'/>
                      <button className={styles.arrow}style={{ marginLeft: '-40px', background:"transparent",color:"white",border: 'none', padding: '8px',zIndex: '2' }}> <VscSend style={{ width:"24px", height:"24px"}}/></button>
                    </div>
                  </div>
                
                <div className={styles.support}>
                  <p className={styles.sup}>Support</p>
                  <div className={styles.supportContent}>
                  <p>123, ABCD Street<br/>
                  HANG World, Hong Kong</p>
                  <p>hworld@gmail.com</p>
                  <p>+88015-88888-9999</p>
                  </div>
                </div>
                </div>
                <div className={styles.flexContainer1}>
                <div className={styles.account}>
                  <p className={styles.sup}>Account</p>
                  <div className={styles.supportContent}>
                  <p>My Account</p>
                  <p>Login/Register</p>
                  <p>Cart</p>
                  <p>Wishlist</p>
                  <p>Shop</p>
                  </div>
                </div>
                <div className={styles.quickLink}>
                  <p className={styles.sup}>Quick Link</p>
                  <div className={styles.supportContent}>
                  <p>Privacy Policy</p>
                  <p>Terms Of Use</p>
                  <p>FAQ</p>
                  <p>Content</p>
                  </div>
                </div>
                </div>
                <div className={styles.downloadApp}>
                  <p className={styles.sup}>Download App</p>
                  <div className={styles.supportContent}>
                  <p className={styles.txt2}>Save $3 with App New User Only</p>
                  <div className={styles.imageBox}>
                    <img src={Qrcode}/>
                    <div className={styles.playStore}>
                      <img src={Google}/>
                      <img src={Apple}/>
                    </div>
                  </div>
                  <div className={styles.icons2}>
                    <RiFacebookLine style={{height:"24px", width:"24px"}}/>
                    <TbBrandTwitter style={{height:"24px", width:"24px"}}/>
                    <FaInstagram style={{height:"24px", width:"24px"}}/>
                    <RiLinkedinLine style={{height:"24px", width:"24px"}}/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </>
    )
} 
export default BlackBox;