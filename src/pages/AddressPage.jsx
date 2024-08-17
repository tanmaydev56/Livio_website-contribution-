import React from 'react';
import '../styles/AddressPage.css';
// import editIcon from '../assets/images/edit.svg'; 

const AddressPage = () => {
  return (
    <div className="address-container">
      <div className="header">
        <h1 className="heading">Addresses</h1>
        <div className="buttons">
          <button className="wishlist-btn">WISHLIST</button>
          <button className="dashboard-btn">DASHBOARD</button>
        </div>
      </div>
      <p className="description">Keep your billing and shipping information up-to-date for smooth transactions.</p>
      <div className="addresses">
        <div className="billing-address">
          <div className="address-heading">
            <h2>Billing Address</h2>
            <img src={editIcon} alt="Edit" className="edit-icon" />
          </div>
          <p>Recipient Name: John Doe</p>
          <p>Street Address: 123 Main Street</p>
          <p>City: Any town</p>
          <p>State/Province: California</p>
          <p>Postal Code: 90210</p>
          <p>Country: United States</p>
        </div>
        <div className="shipping-address">
          <div className="address-heading">
            <h2>Shipping Address</h2>
            <img src={editIcon} alt="Edit" className="edit-icon" />
          </div>
          <p>Recipient Name: John Doe</p>
          <p>Street Address: 123 Main Street</p>
          <p>City: Any town</p>
          <p>State/Province: California</p>
          <p>Postal Code: 90210</p>
          <p>Country: United States</p>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
