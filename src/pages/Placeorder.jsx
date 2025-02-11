import React, { useContext } from 'react';

import './Placeorder.css';
import { StoreContext } from '../components/Context';

const Placeorder = () => {

  const {gettotal} = useContext(StoreContext);




  return (
    <form className="placeorder">
     
      <div className="placeorder-left">
        <p className="title">Delivery Info</p>
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>
        <div className="input-group">
          <label>Address</label>
          <input type="text" placeholder="Enter your address" required />
        </div>
        <div className="input-group">
          <label>City</label>
          <input type="text" placeholder="Enter your city" required />
        </div>
        <div className="input-group">
          <label>ZIP Code</label>
          <input type="text" placeholder="Enter ZIP Code" required />
        </div>
      </div>

     
      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Order Summary</h2>
          <div className="divtotal">
            <p>Subtotal</p>
            <p>{gettotal()}</p> 
          </div>
          <hr />
          <div className="divtotal">
            <p>Delivery Fees</p>
            <p>$2</p>
          </div>
          <hr />
          <div className="divtotal">
            <b>Total</b>
            <b>{gettotal()}</b>
          </div>
        </div>
        <button type="submit">Place Order</button>
       
      </div>
    </form>
  );
};

export default Placeorder;
