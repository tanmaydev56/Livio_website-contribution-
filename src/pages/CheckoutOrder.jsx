
import  { useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import '../styles/CheckoutOrder.css';
import luxuryChair from '../assets/luxurychair.png';
import barStool from '../assets/Product4.png';
import swiningChair from '../assets/Product7.png';

const CheckoutOrder = () => {
    const [checkoutOrder, setCheckoutOrder] = useState([
        { img: luxuryChair, name: 'Luxury Chair', color: '#A9A39F', quantity: 2, price: 100 },
        { img: barStool, name: 'Bar Stool', color: '#9B7F6D', quantity: 1, price: 100 },
        { img: swiningChair, name: 'Swining Chair', color: '#33291F', quantity: 1, price: 100 }
    ]);

    const handleQuantityChange = (index, increment) => {
        const updatedOrder = checkoutOrder.map((item, i) => {
            if (i === index) {
                const newQuantity = item.quantity + increment;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
            }
            return item;
        }).filter(item => item.quantity > 0);
        
        setCheckoutOrder(updatedOrder);
    };

    const handleRemoveItem = (index) => {
        const updatedOrder = checkoutOrder.filter((_, i) => i !== index);
        setCheckoutOrder(updatedOrder);
    };

    const totalItems = checkoutOrder.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = checkoutOrder.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const [Address, setAddress] = useState(false);

    const handleAddressClick = () => {
      setAddress(true);
    }
  
    if (Address) {
      return <Navigate to="/checkoutaddress" />;
    }
    const navigate = useNavigate();
  const handleAddress = () => {
    navigate('/checkoutaddress');
  };
  const handlePayment = () => {
    navigate('/checkoutpayment');
  };

    return (
        <div className="checkout">
            <div className='checkout-header-order'>
                <h1>Checkout</h1>
                <h2>{totalItems} ITEMS</h2>
            </div>
            <div className="checkout-container">
                <div className="checkout-left">
                    <h5 style={{ display: 'flex', justifyContent: 'center' }}>
                        <span style={{ color: '#F47D4A' }}>Your Cart</span> ---------- Address ---------- Payment
                    </h5>
                    <div className='checkout-cart'>
                        <div>
                            <input type="text" placeholder="Please Select Address" />
                            <button className='btn-add' onClick={handleAddress}>Add</button>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div className='checkout-header-item'>
                                        <div className='header-item-checkout'>Item</div>
                                        <div>Color</div>
                                        <div>Quantity</div>
                                        <div>Price</div>
                                    </div>
                                </div>
                                <div>
                                    {checkoutOrder.map((item, index) => (
                                        <div key={index} className="row-left">
                                            <div className="checkout-row col-left">
                                                <img src={item.img} alt={item.name} width={100} height={120} />
                                                <div style={{ marginLeft: '1em' }}>
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
                                            <div  className="col-left">
                                                <div className="quantity">
                                                    <span className="sub" onClick={() => handleQuantityChange(index, -1)}>
                                                        -
                                                    </span>
                                                    <span className="number">{item.quantity}</span>
                                                    <span className="add" onClick={() => handleQuantityChange(index, 1)}>
                                                        +
                                                    </span>
                                                </div>
                                            </div>
                                            <div  className="col-left">${item.price * item.quantity}</div>
                                            <div  className="col-left">
                                                <button className="remove-btn" onClick={() => handleRemoveItem(index)}>X</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checkout-right">
                    <div>
                        <div className="col-right">
                            <div>
                                <div className='row-right head-right'>
                                    <div>Items</div>
                                    <div>Edit cart</div>
                                </div>
                            </div>
                            <div>
                                {checkoutOrder.map((item, index) => (
                                    <div key={index} className='row-right'>
                                        <div>{item.name}</div>
                                        <div>${item.price * item.quantity}</div>
                                    </div>
                                ))}
                                <div className="divider">
                                    <hr />
                                </div>
                                <div className='row-right'>
                                    <div>Total</div>
                                    <div>${totalPrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='btn-payment' onClick={handlePayment}>Continue to Payment</button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutOrder;

