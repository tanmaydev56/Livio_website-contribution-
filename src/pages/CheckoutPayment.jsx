
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutPayment.css";
import visaLogo from "../assets/visa.png";
import mastercardLogo from "../assets/mastercard.png";
import paypalLogo from "../assets/paypal.png";

const CheckoutPayment = () => {
  const [checkoutOrder, setCheckoutOrder] = useState([
    { name: "Luxury Chair", quantity: 2, price: 100 },
    { name: "Bar Stool", quantity: 1, price: 100 },
    { name: "Swining Chair", quantity: 1, price: 100 },
  ]);
  const totalItems = checkoutOrder.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = checkoutOrder.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const navigate = useNavigate();
  const handleThankyou = () => {
    navigate('/checkoutdone');
  };

  return (
    <div className="checkout">
      <div className="checkout-header-order">
        <h1>Checkout</h1>
        <h2>{totalItems} ITEMS</h2>
      </div>
      <div className="checkout-container">
        <div className="checkout-left">
          <h5 style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ color: "#F47D4A" }}>
              Your Cart ---------- Address ---------- Payment
            </span>
          </h5>
          <div className="form-container">
            <h2 className="payment-mode">Payment Mode</h2>
            <div className="payment-options">
              <div className="payment-option">
                <input type="radio" id="credit-card" name="payment" value="credit-card" />
                <label htmlFor="credit-card">Pay with Credit Card</label>
              </div>
              <div className="payment-option">
                <input type="radio" id="paypal" name="payment" value="paypal" />
                <label htmlFor="paypal">Pay with PayPal</label>
              </div>
              <div className="payment-option">
                <input type="radio" id="giftcard" name="payment" value="giftcard" />
                <label htmlFor="giftcard">Use giftcards</label>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="input-group">
              <label htmlFor="card-number">Card number</label>
              <div className="card-container">
              <input type="text" id="card-number" name="card-number" />
              <div className="card-images">
                <img src={visaLogo} alt="Visa" />
                <img src={mastercardLogo} alt="Mastercard" />
                <img src={paypalLogo} alt="PayPal" />
              </div></div>
            </div>
            <div className="expiration-cvv">
              <div className="input-group">
                <label htmlFor="expiration">Expiration</label>
                <input type="text" id="expiration" name="expiration" />
              </div>
              <div className="input-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" />
              </div>
            </div>
            <div className="text-group-container">
            <div className="text-group">
              <p>Use shipping address as billing address</p>
            </div>
            <div className="text-group">
              <p>I accept Livio terms and conditions</p>
            </div>
            </div>
            <button className="confirm-payment" onClick={handleThankyou}>CONFIRM PAYMENT</button>
          </div>
        </div>

        <div className="checkout-right">
          <div className="col-right">
            <div>
              <div className="row-right">
                <div>Items</div>
                <div>Edit cart</div>
              </div>
            </div>
            <div>
              {checkoutOrder.map((item, index) => (
                <div key={index} className="row-right">
                  <div>{item.name}</div>
                  <div>${item.price * item.quantity}</div>
                </div>
              ))}
              <div className="divider1">
                <hr />
              </div>
              <div className="row-right">
                <div>Total</div>
                <div>${totalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CheckoutPayment;
