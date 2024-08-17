import React from 'react';
import '../styles/Products-page.css';
import ratingImage from '../assets/images/rating-page.svg';
import luxuryChairImage from '../assets/images/luxurychair-page.png'; 

const Products = () => {
  return (
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
  );
};

export default Products;
