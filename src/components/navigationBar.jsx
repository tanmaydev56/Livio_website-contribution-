// src/components/Navigation.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../styles/navBar.module.css";
import IMG1 from "../assets/images/logo.png";
import IMG2 from "../assets/images/search.png";
import IMG3 from "../assets/images/profile.png";
import IMG4 from "../assets/images/bell.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchClick = () => {
    navigate("/search"); // Navigate to the Search page
  };

  const handleSearchProfile = () => {
    navigate("/login"); // Navigate to the Search page
  };

  return (
    <>
      <div className={styles.banner}>
        <img className={styles.livioLogo} src={IMG1} alt="Logo" />
        <div className={`${styles.content}`}>
          <a
            href="/home"
            className={`${styles.collections} ${styles.mobileMenuItem}`}
          >
            <p>HOME</p>
          </a>
          <a
            href="/categories"
            className={`${styles.collections} ${styles.mobileMenuItem}`}
          >
            <p>COLLECTIONS</p>
          </a>
          <a
            href="/aboutUs"
            className={`${styles.collections} ${styles.mobileMenuItem}`}
          >
            <p>ABOUT</p>
          </a>
          <a
            href="/products"
            className={`${styles.collections} ${styles.mobileMenuItem}`}
          >
            <p>PRODUCTS</p>
          </a>
          <a
            href="/dashboard"
            className={`${styles.collections} ${styles.mobileMenuItem}`}
          >
            <p>SERVICES</p>
          </a>
          <a
            href="/contact"
            className={`${styles.collections} ${styles.mobileMenuItem}`}
          >
            <p>CONTACT</p>
          </a>
        </div>
        <div className={`${styles.icons} ${styles.mobileIcons}`}>
          <img
            className={`${styles.search} ${styles.navImage}`}
            src={IMG2}
            alt="Search"
            onClick={handleSearchClick} // Add onClick handler
          />
          <img className={`${styles.navImage}`} src={IMG4} alt="Profile" />
          <img className={`${styles.navImage}`} onClick={handleSearchProfile} src={IMG3} alt="Bell" />
          <div className={styles.hamburger} onClick={toggleMobileMenu}>
            <div
              className={`${styles.hamburgerLine} ${
                isMobileMenuOpen ? styles.open : ""
              }`}
            ></div>
            <div
              className={`${styles.hamburgerLine} ${
                isMobileMenuOpen ? styles.open : ""
              }`}
            ></div>
            <div
              className={`${styles.hamburgerLine} ${
                isMobileMenuOpen ? styles.open : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.content} ${styles.content1} ${
          isMobileMenuOpen ? styles.openMenu : ""
        }`}
      >
        <a
          href="/"
          className={`${styles.collections} ${styles.mobileMenuItem}`}
        >
          <p>HOME</p>
        </a>
        <a
          href="/categories"
          className={`${styles.collections} ${styles.mobileMenuItem}`}
        >
          <p>COLLECTIONS</p>
        </a>
        <a
          href="#"
          className={`${styles.collections} ${styles.mobileMenuItem}`}
        >
          <p>ABOUT</p>
        </a>
        <a
          href="/product"
          className={`${styles.collections} ${styles.mobileMenuItem}`}
        >
          <p>PRODUCTS</p>
        </a>
        <a
          href="#"
          className={`${styles.collections} ${styles.mobileMenuItem}`}
        >
          <p>SERVICES</p>
        </a>
        <a
          href="/product"
          className={`${styles.collections} ${styles.mobileMenuItem}`}
        >
          <p>CONTACT</p>
        </a>
      </div>
    </>
  );
};

export default Navigation;
