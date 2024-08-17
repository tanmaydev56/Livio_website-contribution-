import styles from '../styles/Signup.module.css';
import IMG2 from '../assets/images/right.png';
import IMG3 from '../assets/images/social1.png';
import IMG4 from '../assets/images/social2.png';
import IMG5 from '../assets/images/social3.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(){
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Use a regular expression to allow only numbers and limit to 10 digits
        if (value === '' || (value.length <= 10 && /^[0-9\b]+$/.test(value))) {
            setPhone(value);
        }
    };

    return(
        <div className={styles.Login}>
            <div className={styles.leftCont}>
                <p className={styles.livio}>Livio</p>
                <div className={styles.mainHead}>
                    <p>Transforming <br />the world of<br />Furniture.</p>
                    {/* <img className={styles.dots} src={IMG1} alt="" /> */}
                </div>
                <div className={styles.account}>
                    <p className={styles.dont}>Already have an Account?</p>
                    <Link className={styles.link} to="/login">
                        <div className={styles.createCont}>
                            <p className={styles.create}>Login</p>
                            <img className={styles.arrow} src={IMG2} alt="" />
                        </div>
                    </Link>
                    <div className={styles.line}></div>
                </div>
            </div>
            <div className={styles.rightCont}>
                <div className={styles.loginBox}>
                    <p className={styles.loginHead}>Create your Account</p>
                    <p className={styles.label1}>Username</p>
                    <input className={styles.inp1} type="text" name="" id="" />
                    <p className={`${styles.label1} ${styles.number}`}>Phone</p>
                    <input className={styles.inp1}
                            value={phone}
                            onChange={handlePhoneChange}
                            type="number" name="" id="" />
                    <p className={styles.label1}>Email-id</p>
                    <input className={styles.inp1} type="email" name="" id="" />
                    <p className={styles.label2}>Password</p>
                    <input className={styles.inp2} type="password" name="" id="" />
                    <button className={styles.loginBtn}>Sign Up</button>
                    <div className={styles.social}>
                        <p>or</p>
                        <p>Sign up with</p>
                        <div className={styles.socialImg}>
                        <Link to="https://www.facebook.com">
                            <img src={IMG3} alt="" />
                        </Link>
                        <Link to="https://www.google.com">
                            <img src={IMG4} alt="" />
                        </Link>
                        <Link to="https://www.twitter.com">
                            <img src={IMG5} alt="" />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;