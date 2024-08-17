
import  { useState } from 'react'
import { Navigate } from 'react-router-dom';
import '../styles/CheckoutAddress.css'
import { MdAddCircleOutline } from "react-icons/md";

const CheckoutAddress = () => {
    const [checkoutOrder, setCheckoutOrder] = useState([
        { name: 'Luxury Chair', quantity: 2, price: 100 },
        { name: 'Bar Stool', quantity: 1, price: 100 },
        { name: 'Swining Chair', quantity: 1, price: 100 }
    ]);
    const totalItems = checkoutOrder.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = checkoutOrder.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const [payment, setpayment] = useState(false);

    const handlePaymentClick = () => {
        setpayment(true);
    }

    if (payment) {
        return <Navigate to="/checkout-payment" />;
    }

  return (
    <div className="checkout">
            <div className='checkout-header-order'>
                <h1>Checkout</h1>
                <h2>{totalItems} ITEMS</h2>
            </div>
            <div className="checkout-container">
                <div className="checkout-left">
                    <h5 style={{ display: 'flex', justifyContent: 'center' }}>
                        <span style={{ color: '#F47D4A' }}>Your Cart ---------- Address </span>---------- Payment
                    </h5>
                    <div className="address-container">
                    <h5 className='address-head'>Delivery to</h5>
                    <div className="address-add">
                    <MdAddCircleOutline size={52} color='#D9D9D9'/>
                    <h5>Add New Address</h5>
                    </div>
                    </div>
                </div>

                <div className="checkout-right">
                    <div>
                        <div className="col-right">
                            <div>
                                <div className='row-right'>
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
                    <button className='btn-payment' onClick={handlePaymentClick}>Continue to Payment</button>
                </div>
            </div>
        </div>
  )
}



export default CheckoutAddress