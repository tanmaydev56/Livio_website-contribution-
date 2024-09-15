import styles from "../styles/user.module.css"
import face2 from "../assets/images/face2.png"
import {useState} from 'react'
import SideBar from "../components/sideBar";
import SettingsHead from "../components/settingsHead";
const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
  
    // Format the cleaned number with the desired pattern
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}`;
  }
  return value;
};
const User=()=>{
  

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, '');
        const formattedValue = formatPhoneNumber(inputValue);
        setPhoneNumber(formattedValue);
        
    };
return(
    <>
    <div style={{marginTop:"-50px"}}>
    <SettingsHead/>
    <div style={{display:"flex",paddingLeft:"20px",paddingBottom:"30px",gap:"45px"}}>
    <SideBar/>
    <div className={styles.container}>
        <div className={styles.edit}>
            <img src={face2}/>
           <a href="/editProfile"> <button className={styles.editBtn}>Edit Profile</button></a> 
        </div>
        <div className={styles.contact}>
            <div style={{borderRadius: "36px 36px var(--Corner-None, 0px) var(--Corner-None, 0px)",

border: "1px solid #000",

background: "#606060"}}><p className={styles.contactHead}>Contact Details</p></div>
      
        <div className={styles.name}>
            <div className={styles.first}>
            <p className={styles.nameDetails}>First Name</p>
            <input type="text" placeholder="John" className={styles.txt}/>
            </div>
            <div className={styles.last}>
            <p className={styles.nameDetails}>Last Name</p>
            <input type="text" placeholder="Doe"className={styles.txt}/>
            </div>
            

        </div>
        <div className={styles.phone}>
            <p className={styles.nameDetails}>Phone Number</p>
            <input type="text" className={styles.numField} value={phoneNumber}
        onChange={handleInputChange}
        placeholder="+91 12345 67890"/>
        </div>
        </div>
        <div className={styles.account}>
            <p className={styles.contactHead}>Account Overview</p>
            <div className={styles.table}>
            <div style={{borderRadius: "36px 36px var(--Corner-None, 0px) var(--Corner-None, 0px)",

border: "1px solid #000",

background: "#606060",display:"flex",justifyContent:"space-around"}}><p className={styles.accountHead}>E-mail</p>
<p className={styles.accountHead} style={{paddingLeft:"60px"}}>Password</p>
<p className={styles.accountHead}>Status</p>
<p className={styles.accountHead}>Primary</p>
</div>
<div className={styles.row}>
    <p className={styles.mail}>abcd@mail.com</p>
    <p className={styles.pswd}>*******</p>
    <button className={styles.verified}>Verified</button>
    <input type="radio" className={styles.radio} name="one"/>
</div>
<div className={styles.row}>
<p className={styles.mail}>abcd@mail.com</p>
    <p className={styles.pswd}>************</p>
    <button className={styles.unverified}>Unverified</button>
    <input type="radio" className={styles.radio} name="one"/>
</div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
)
}
export default User;