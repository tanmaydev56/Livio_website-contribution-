import React from 'react';
// import "../styles/pr"
import ratingImage from '../assets/images/rating.svg';
import luxuryChairImage from '../assets/images/luxurychair.png'; 
import SideButtons from "../components/SideButtons"
import DashboardHead from "../components/DashboardHead"
const Products = () => {
  return (
    <div  style={{
      display: 'flex',
      flexDirection:"column",
      justifyContent:"center",
     padding:"30px",
     gap:"40px"
    }} >
    <DashboardHead/>
    <div style={{
            display:"flex",
           
            gap:"150px"
            
          
           
            
        }}> 
       < div style={{
        marginLeft:"65px"
       }}>
   
    <SideButtons/>
    </div>
    <div className="product-container">
      <h2>PRODUCTS</h2>

      <div className="row">
      <div className='firstdiv'>
        <img src={luxuryChairImage} alt="Luxury Chair" className="chairimg" /> 
        <div className="grey-box"> 
          <p>Luxury Chair</p></div> 
        </div>
        <div className="text">
          <img src={ratingImage} alt="Rating" />
          <p>Nice one👌🏻</p>
          <p>Comfortable!</p>
          <p>Sturdy</p>
        </div>
        <div className='ellipse-container'>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
        </div>
      </div>

      <div className="row">
      <div className='firstdiv'>
        <img src={luxuryChairImage} alt="Luxury Chair" className="chairimg" /> 
        <div className="grey-box"> 
          <p>Luxury Chair</p></div> 
        </div>
        <div className="text">
          <img src={ratingImage} alt="Rating" />
          <p>Nice one👌🏻</p>
          <p>Comfortable!</p>
          <p>Sturdy</p>
        </div>
        <div className='ellipse-container'>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
        </div>
      </div>

      <div className="row">
      <div className='firstdiv'>
        <img src={luxuryChairImage} alt="Luxury Chair" className="chairimg" /> 
        <div className="grey-box"> 
          <p>Luxury Chair</p></div> 
        </div>
        <div className="text">
          <img src={ratingImage} alt="Rating" />
          <p>Nice one👌🏻</p>
          <p>Comfortable!</p>
          <p>Sturdy</p>
        </div>
        <div className='ellipse-container'>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
        </div>
      </div>

    </div>
    </div>
    </div>
  );
};

export default Products;
