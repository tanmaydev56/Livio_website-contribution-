
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutDone.css';

const CheckoutDone = () => {
  const [checkoutOrder, setCheckoutOrder] = useState([
    { name: 'Luxury Chair', quantity: 2, price: 100 },
    { name: 'Bar Stool', quantity: 1, price: 100 },
    { name: 'Swining Chair', quantity: 1, price: 100 }
  ]);
  const totalItems = checkoutOrder.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = checkoutOrder.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = totalItems === 0 ? 0 : totalPrice > 100 ? 0 : 100;

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="checkout">
      <div className='checkout-header-order'>
        <h1>Checkout</h1>
        <h2>{totalItems} ITEMS</h2>
      </div>
      <div className="checkout-container">
        <div className="checkout-left">
          <div className="thank-you">
            <div className="thank-you-msg">
              <div>
                <p className="thank-you-message">Thank You for your purchase!</p>
                <p className="confirmation-email">You will receive a confirmation email shortly with your order details and tracking information.</p>
              </div>
              <div>
                <p className="customer-message">
                  Dear [Customer’s Name], <br/>
                  Thank you for choosing Livio for your furniture needs! We are thrilled to have you as part of our family. Your order has been successfully placed, and we are excited to help you create the perfect living space.
                </p>
              </div>
            </div>
            <div className="last">
              <span className="livio">LIVIO</span>
              <button className="back-to-home" onClick={handleBackToHome}>BACK TO HOME</button>
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <div className="col-right">
            <div className='row-right'>
              <div>Order No.</div>
              <div>123</div>
            </div>
            <div className='row-right'>
              <div>Est delivery date</div>
              <div>00/00/00</div>
            </div>
            <div className='row-right'>
              <div>Shipping details</div>
              <div>Abcd</div>
            </div>
            <br/>
            <br/>
            <div className='row-right'>
              <div>Total</div>
              <div>${totalPrice}</div>
            </div>
            <br/>
            <div>
              {checkoutOrder.map((item, index) => (
                <div key={index} className='row-right'>
                  <div>{item.name}</div>
                  <div>${item.price * item.quantity}</div>
                </div>
              ))}
            </div>
            <br/>
            <div className='row-right'>
              <div>Shipping</div>
              <div>${shipping}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDone;
