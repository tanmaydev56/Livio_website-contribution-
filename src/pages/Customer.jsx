import React from 'react';
import '../styles/Customer.css';
import customerimage from '../assets/images/customer.png';
import ratingImage from '../assets/images/rating.svg';
import luxuryChairImage from '../assets/images/luxurychair.png'; 
import SideButtons from "../components/SideButtons"
import DashboardHead from "../components/DashboardHead"
const Customer = () => {
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
   
    <div className="customer-container">
      <h2>CUSTOMERS</h2>
      <div className="row">
        <img src={customerimage} alt="Customer" className='customerimg' />
        <div className="text" >
          <p className='name'>Nitish</p>
          <img src={ratingImage} alt="Rating" />
          <p>Nice one👌🏻</p>
        </div>
        <div className='lastdiv'>
        <img src={luxuryChairImage} alt="Luxury Chair" className="chairimg" /> 
        <div className="grey-box"> 
        <p className='para'>Luxury Chair</p></div> 
        </div>
        <div className='ellipse-container'>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
        </div>
      </div>

      <div className="row">
        <img src={customerimage} alt="Customer" className='customerimg' />
        <div className="text">
          <p className='name'>Nitish</p>
          <img src={ratingImage} alt="Rating" />
          <p>Nice one👌🏻</p>
        </div>
        <div className='lastdiv'>
        <img src={luxuryChairImage} alt="Luxury Chair" className="chairimg" /> 
        <div className="grey-box"> 
          <p>Luxury Chair</p></div> 
        </div>
        <div className='ellipse-container'>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
          <div className='ellipse'></div>
        </div>
      </div>

      <div className="row">
        <img src={customerimage} alt="Customer" className='customerimg' />
        <div className="text">
          <p className='name'>Nitish</p>
          <img src={ratingImage} alt="Rating" />
          <p>Nice one👌🏻</p>
        </div>
        <div className='lastdiv'>
        <img src={luxuryChairImage} alt="Luxury Chair" className="chairimg" /> 
        <div className="grey-box">
          <p>Luxury Chair</p>
          </div> 
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

export default Customer;
