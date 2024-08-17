import styles from '../styles/Category.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import IMG1 from '../assets/images/Kitchen.png';
import IMG2 from '../assets/images/Bathroom.png';
import IMG3 from '../assets/images/Living1.png';
import IMG4 from '../assets/images/bedroom.png';
import IMG5 from '../assets/images/kitchenClick.png'
import IMG6 from '../assets/images/kitchenIcon.png'
import IMG7 from '../assets/images/bathIcon.png'
import IMG8 from '../assets/images/livingIcon.png'
import IMG9 from '../assets/images/bedroomIcon.png'
import IMG10 from '../assets/images/kitchenCard.png';
import IMG11 from '../assets/images/bathroomCard.png';
import IMG12 from '../assets/images/livingCard.png';
import IMG13 from '../assets/images/roomCard.png';
import Collection from './Collection';

const Category = () => {
  const [visibleDiv, setVisibleDiv] = useState(null);
  const handle = (divId) => {
    setVisibleDiv(visibleDiv === divId ? null : divId);
    setOpacity(0); // Start fade-out
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 500);
  };

  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault(); // Prevent default <Link> navigation
    setOpacity(0); // Start fade-out
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to top
      navigate(path); // Navigate after fade-out
    }, 500); // Match this with your CSS transition time
  };

  const [opacity, setOpacity] = useState(1); // State to control opacity

  // const fadeOutAndNavigate = () => {
  //   setOpacity(0); // Start fade-out
  //   setTimeout(() => {
  //     window.scrollTo(0, 0); // Scroll to top
  //     //navigate(path);  Navigate to new page
  //   }, 500); // Adjust timeout to match your CSS transition duration
  // };


  return (
    <div className={styles.CategoryCont} style={{ opacity: opacity, transition: 'opacity 0.5s ease' }}>
      <p className={styles.categoryHeading}>CATEGORIES</p>
      <div className={styles.ellipseBox}>
        <div className={`${styles.Category} ${styles.box1}`}
            style={{ opacity: opacity, transition: 'opacity 0.5s ease' }}
            onClick={() => handleClick('div1')}>
          <Link to="/kitchen" onClick={(e) => handleClick(e, '/kitchen')}>
            <img className={`${styles.ellipse}`} src={IMG1} alt="Kitchen"
              style={{
                display: visibleDiv === 'div1' ? 'none' : 'block'
              }} />
          </Link>
          <div className={styles.onClickImage}
              style={{
                display: visibleDiv === 'div1' ? 'block' : 'none'
              }}>
            <img src={IMG5} alt="" />
            <img className={styles.icon} src={IMG6} alt="" />
          </div>
            <p>Kitchen</p>
          </div>

          <div className={`${styles.Category} ${styles.box1}`}
              onClick={() => handle('div2')}>
            <Link to="/bathroom"><img className={styles.ellipse} src={IMG2} alt="Kitchen"
                style={{
                  display: visibleDiv === 'div2' ? 'none' : 'block'
                }} /></Link>
            <div className={styles.onClickImage}
                style={{
                  display: visibleDiv === 'div2' ? 'block' : 'none'
                }}>
              <img src={IMG5} alt="" />
              <img className={styles.icon} src={IMG7} alt="" />
            </div>
            <p>Bathroom</p>
          </div>

          <div className={`${styles.Category} ${styles.box1}`}
              onClick={() => handle('div3')}>
            <Link to="/living"><img className={styles.ellipse} src={IMG3} alt="Kitchen"
                style={{
                  display: visibleDiv === 'div3' ? 'none' : 'block'
                }} /></Link>
            <div className={styles.onClickImage}
                style={{
                  display: visibleDiv === 'div3' ? 'block' : 'none'
                }}>
              <img src={IMG5} alt="" />
              <img className={styles.icon} src={IMG8} alt="" />
            </div>
            <p>Living Room</p>
          </div>

          <div className={`${styles.Category} ${styles.box1}`}
              onClick={() => handle('div4')}>
            <Link to="/bedroom"><img className={styles.ellipse} src={IMG4} alt="Kitchen"
                style={{
                  display: visibleDiv === 'div4' ? 'none' : 'block'
                }} /></Link>
            <div className={styles.onClickImage}
                style={{
                  display: visibleDiv === 'div4' ? 'block' : 'none'
                }}>
              <img src={IMG5} alt="" />
              <img className={styles.icon} src={IMG9} alt="" />
            </div>
            <p>Bedroom</p>
          </div>
      </div>

      {/* <div className={styles.collections}>
        <div style={{
            display: visibleDiv === 'div1' ? 'block' : 'none'
          }}>
          <Collection 
            // background="#2A2A34"
            type="Kitchen"
            image={IMG10}
            head="Traditional Kitchen"
            price="From $499"
            head1="Modern Kitchen"
            price1="From $499"
            head2="Rustic Kitchen"
            price2="From $399"/>
        </div>


      <div style={{
          display: visibleDiv === 'div2' ? 'block' : 'none'
        }}>
        <Collection 
          background="#2A2A34"
          type="Bathroom"
          image={IMG11}
          head="Luxury Bathroom"
          price="From $699"
          head1="Smart Bathroom"
          price1="From $499"
          head2="Modern Bathroom"
          price2="From $399"/>
      </div>

      <div style={{
          display: visibleDiv === 'div3' ? 'block' : 'none'
        }}>
        <Collection 
          background1="#2A2A34"
          type="Living Room"
          image={IMG12}
          head="Contemporary"
          price="From $699"
          head1="Minimalist"
          price1="From $499"
          head2="Traditional"
          price2="From $399"/>
      </div>
=======
        <div style={{
            display: visibleDiv === 'div2' ? 'block' : 'none'
          }}>
          <Collection 
            background="#2A2A34"
            type="Bathroom"
            image={IMG11}
            head="Luxury Bathroom"
            price="From $699"
            head1="Smart Bathroom"
            price1="From $499"
            head2="Modern Bathroom"
            price2="From $399"/>
        </div>

        <div style={{
            display: visibleDiv === 'div3' ? 'block' : 'none'
          }}>
          <Collection 
            background1="#2A2A34"
            type="Living Room"
            image={IMG12}
            head="Contemporary"
            price="From $699"
            head1="Minimalist"
            price1="From $499"
            head2="Traditional"
            price2="From $399"/>
        </div>


        <div style={{
            display: visibleDiv === 'div4' ? 'block' : 'none'
          }}>
          <Collection 
            // background1="#2A2A34"
            type="Bedroom"
            image={IMG13}
            head="Classic Room"
            price="From $699"
            head1="Double Room"
            price1="From $499"
            head2="Super Room"
            price2="From $399"/>
        </div>
      </div>

      <div style={{
          display: visibleDiv === 'div4' ? 'block' : 'none'
        }}>
        <Collection 
          // background1="#2A2A34"
          type="Bedroom"
          image={IMG13}
          head="Classic Room"
          price="From $699"
          head1="Double Room"
          price1="From $499"
          head2="Super Room"
          price2="From $399"/>
      </div> */}

      <div className={styles.collections}>
        <>
          <Collection 
            // background="#2A2A34"
            type="Kitchen"
            image={IMG10}
            head="Traditional Kitchen"
            price="From $499"
            head1="Modern Kitchen"
            price1="From $499"
            head2="Rustic Kitchen"
            price2="From $399"/>
        </>
        <>
        <Collection 
          background="#2A2A34"
          display="none"
          type="Bathroom"
          image={IMG11}
          head="Luxury Bathroom"
          price="From $699"
          head1="Smart Bathroom"
          price1="From $499"
          head2="Modern Bathroom"
          price2="From $399"/>
        </>
        <>
        <Collection 
          background1="#2A2A34"
          display="none"
          type="Living Room"
          image={IMG12}
          head="Contemporary"
          price="From $699"
          head1="Minimalist"
          price1="From $499"
          head2="Traditional"
          price2="From $399"/>
        </>
        <>
        <Collection 
          // background1="#2A2A34"
          type="Bedroom"
          display="none"
          image={IMG13}
          head="Classic Room"
          price="From $699"
          head1="Double Room"
          price1="From $499"
          head2="Super Room"
          price2="From $399"/>
        </>
      </div>
    </div>
  );
};

export default Category;
