import styles from '../styles/Login.module.css';
// import IMG1 from '../assets/images/dots.png';
import IMG2 from '../assets/images/right.png';
import data from '../assets/user.json';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('none');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate= useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = data.find(user => user.username === username && user.password === password);
    // console.log(data, username, password);
    if (user) {
      setError('none');
      navigate('/aboutUs');
    } else {
        setError('block');
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
                    <Link className={styles.link} to="/signup">
                        <p className={styles.dont}>Don't have an account</p>
                        <div className={styles.createCont}>
                            <p className={styles.create}>Create Account</p>
                            <img className={styles.arrow} src={IMG2} alt="" />
                        </div>
                    </Link>
                    <div className={styles.line}></div>
                </div>
                {/* <div className={styles.about}>
                    <p>About Us</p>
                    <p>
                        Over 5000 Happy <br />
                        Customers and <br />
                        counting with the <br />
                        best customer <br />
                        service around.
                    </p>
                </div> */}
            </div>
            <div className={styles.rightCont}>
                <div className={styles.loginBox}>
                    <p className={styles.loginHead}>Login to your Account</p>
                    <p className={styles.label1}>Username</p>
                    <input onChange={handleUsernameChange} className={styles.inp1} type="text" name=""/>
                    <p className={styles.label2}>Password</p>
                    <input onChange={handlePasswordChange} className={styles.inp2} type="password" name="" />
                    <div className={styles.rememberCont}>
                        <div className={styles.checkboxWrapper}>
                            <div className={styles.remember}>
                                <input type="checkbox" id="checkboxId" />
                                {/* <span id="checkboxVisual"></span> */}
                                <label htmlFor="checkboxId">Remember Me</label>
                            </div>
                            <p className={styles.forgot}>Forgot Your Password?</p>
                        </div>
                    </div>
                    <h2 style={{
                        display: error
                    
                    }} className={styles.invalid}>Invalid Credentials!</h2>
                    <button onClick={handleSubmit} className={styles.loginBtn}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;