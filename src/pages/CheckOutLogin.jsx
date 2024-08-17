
import  { useState } from 'react';
import '../styles/Checkout.css';
import { FcGoogle } from "react-icons/fc";
import { Navigate } from 'react-router-dom';

const CheckOutLogin = () => {
  const [proceed, setProceed] = useState(false);

  const handleProceedClick = () => {
    setProceed(true);
  }

  if (proceed) {
    return <Navigate to="/checkoutorder" />;
  }

  return (
    <div className="checkout">
      <div className='checkout-header'>
        <h1>Checkout</h1>
      </div>
      <div className='checkout-outer'>
        <div className='checkout-inner'>
          <h2>Login</h2>
          <button className='btn-google'>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FcGoogle size={20} style={{ paddingRight: '0.8em' }} />Google
            </a>
          </button>
          <h4>-OR-</h4>
          <input type="text" placeholder='Enter Phone Number' className='input-phone' />
          <button className='btn-proceed' onClick={handleProceedClick}>Proceed</button>
          <div>NEW USER? <a href='/signup' className='btn-createAcc'>CREATE ACCOUNT</a></div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutLogin;

