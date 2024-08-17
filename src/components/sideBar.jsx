import React, { useState, useEffect } from 'react';
import lang from "../assets/images/Language.png";
import noti from "../assets/images/Notification.png";
import user from "../assets/images/User2.png";
import help from "../assets/images/help.png";
import styles from "../styles/sideBar.module.css";

const SideBar = () => {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const savedActiveButton = localStorage.getItem('activeButton');
    if (savedActiveButton) {
      setActiveButton(savedActiveButton);
    }
  }, []);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    localStorage.setItem('activeButton', buttonName);
  };

  return (
    <div className={styles.content}>
      <a
        className={styles.link}
        style={{
          color: "#000",
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "100px",
          fontFamily: "Apfel Grotezk",
          textDecoration: "none"
        }}
        href="/settings"
      >
        <div
          className={`${styles.select} ${activeButton === 'user' ? styles.active : ''}`}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          type="button"
          onClick={() => handleClick('user')}
        >
            
          <img src={user} alt="User" />
          User Details
        
        </div>
        </a>
      <a
         className={styles.link}
          style={{
            color: "#000",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "100px",
            fontFamily: "Apfel Grotezk",
            textDecoration: "none"
          }}
          href="/notifications"
        >
      <div
       className={`${styles.select} ${activeButton === 'notifications' ? styles.active : ''}`}
       style={{ display: "flex", alignItems: "center", gap: "10px" }}
       type="button"
       onClick={() => handleClick('notifications')}
      >
        <img src={noti} alt="Notifications" />
       
          Notifications
      
      </div>
      </a>
      <a
       className={styles.link}
          style={{
            color: "#000",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "100px",
            fontFamily: "Apfel Grotezk",
            textDecoration: "none"
          }}
          href="/language"
        >
      <div
         className={`${styles.select} ${activeButton === 'language' ? styles.active : ''}`}
         style={{ display: "flex", alignItems: "center", gap: "10px" }}
         type="button"
         onClick={() => handleClick('language')}
      >
        <img src={lang} alt="Language" />
       
          Language
      
      </div>
      </a>
      <a
       className={styles.link}
      
        style={{
          color: "#000",
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "100px",
          fontFamily: "Apfel Grotezk",
          textDecoration: "none"
        }}
        href="/help"
      >
        <div
          className={`${styles.select} ${activeButton === 'help' ? styles.active : ''}`}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          type="button"
          onClick={() => handleClick('help')}
        >
          <img src={help} alt="Help" />
          Help
        </div>
      </a>
    </div>
  );
};

export default SideBar;
