import React from 'react'
import SideBar from "../components/sideBar";
import SettingsHead from "../components/settingsHead";
import styles from "../styles/help.module.css"
export default function Help() {
  return (
    <>
    <div style={{marginTop:"-50px"}}>
    <SettingsHead/>
    <div style={{display:"flex",paddingLeft:"20px",paddingBottom:"30px",gap:"45px"}}>
    <SideBar/>
    <div className={styles.background}>
        <h1 style={{color: "#FF7E48", fontSize:"64px", margin:'10px'}}>Help and Support</h1>
        <div style={{fontSize:"25px",margin:"20px"}}>        
          <div style={{display:'flex', alignItems:'center', margin:"10px"}}>
          <img src='/src/assets/images/helpIcon.png' style={{margin:"10px"}} />
          <div>
          <h1>Help Center</h1>
          <p style={{fontSize:'15px'}}>Get Help, Contact Us</p>
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center',margin:"10px"}}>
          <img src='/src/assets/images/Accept.png' style={{margin:"10px"}}/>
          <h1>Terms And Privacy Policy</h1>
        </div>
        <div style={{display:'flex', alignItems:'center',margin:'10px'}}>
          <img src='/src/assets/images/Info.png' style={{margin:"10px"}} />
          <h1>Website Infomation</h1>
        </div>
        </div>

    </div>
    </div>
    </div>
    </>
  )
}
