
import  { useState } from "react";
import "../styles/cart.css";
import { Navigate } from "react-router-dom";
import luxuryChair from "../assets/image 3.png";
import barStool from "../assets/Product4.png";
import swiningChair from "../assets/Product7.png";

const Cart = () => {
  const [cart, setcart] = useState([
    {
      img: luxuryChair,
      name: "Luxury Chair",
      color: "#A9A39F",
      quantity: 2,
      price: 100,
    },
    {
      img: barStool,
      name: "Bar Stool",
      color: "#9B7F6D",
      quantity: 1,
      price: 100,
    },
    {
      img: swiningChair,
      name: "Swining Chair",
      color: "#33291F",
      quantity: 1,
      price: 100,
    },
  ]);

  const handleQuantityChange = (index, increment) => {
    const updatedOrder = cart
      .map((item, i) => {
        if (i === index) {
          const newQuantity = item.quantity + increment;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setcart(updatedOrder);
  };

  const handleRemoveItem = (index) => {
    const updatedOrder = cart.filter((_, i) => i !== index);
    setcart(updatedOrder);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = totalItems === 0 ? 0 : subtotal > 100 ? 0 : 100;
  const tax = totalItems > 0 ? 5 : 0;
  const totalPrice = subtotal + shipping + tax;

  const [Address, setAddress] = useState(false);

  const handleAddressClick = () => {
    setAddress(true);
  };

  if (Address) {
    return <Navigate to="/checkoutlogin" />;
  }

  return (
    <div>
      <div className="title-container">
        <h1 className="title">Shopping Cart</h1>
        <h2 className="items-count">{totalItems} ITEMS</h2>
      </div>

      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-cart">
            <div className="cart-header-item">
              <div className="header-item-cart">Item</div>
              <div>Color</div>
              <div>Quantity</div>
              <div>Price</div>
            </div>
            <div>
              {cart.map((item, index) => (
                <div className="row" key={index}>
                  <div className="row-left">
                    <div className="cart-row col-left">
                      <img
                        src={item.img}
                        alt={item.name}
                        width={100}
                        height={120}
                      />
                      <div style={{ marginLeft: "1em" }}>
                        <h4 style={{ marginBottom: 0 }}>{item.name}</h4>
                        <p style={{ marginTop: 0 }}>AYAL PRODUCTION LTD</p>
                      </div>
                    </div>
                    <div className="col-left">
                      <span
                        className="btn chooseColor clicked"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    </div>
                    <div className="col-left">
                      <div className="quantity">
                        <span
                          className="sub"
                          onClick={() => handleQuantityChange(index, -1)}
                        >
                          -
                        </span>
                        <span className="number">{item.quantity}</span>
                        <span
                          className="add"
                          onClick={() => handleQuantityChange(index, 1)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="col-left">
                      ${item.price * item.quantity}
                    </div>
                  </div>
                  <div className="col-left remove-col">
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItem(index)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="free-shipping-text">
            Free shipping for all orders above $100
          </p>
        </div>

        <div className="cart-right">
          <div>
            <div className="col-right">
              <div className="summary-text">Summary</div>
              <div className="row-right">
                <div>Subtotal</div>
                <div>${subtotal}</div>
              </div>
              <div className="row-right">
                <div>Shipping</div>
                <div>${shipping}</div>
              </div>
              <div className="row-right">
                <div>Tax</div>
                <div>${tax}</div>
              </div>
              <div className="promocode">
                <div>Promocode</div>
                <input
                  type="text"
                  placeholder="Enter your promocode"
                  className="promocode-input"
                />
                <button className="promocode-btn">APPLY</button>
              </div>
              <div className="total">
                <div>Total</div>
                <div>${totalPrice}</div>
              </div>
            </div>
          </div>
          <button className="btn-payment" onClick={handleAddressClick}>
            PROCEED TO BUY
          </button>
          <div className="divider">
  <hr />
  <span className="divider-text">OR</span>
  <hr />
</div>

<p className="continue-shopping-text">CONTINUE SHOPPING</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

