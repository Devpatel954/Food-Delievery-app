import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../components/Context'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const { cartItems, food_list, removefromcart, gettotal } = useContext(StoreContext)

 const navigate = useNavigate();

  return (
    <div>

      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item" >
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}</p>
                    <p onClick={() => {
                      removefromcart(item._id)
                    }} className='cross' >x</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="divtotal">
              <p>Subtotal</p>
              <p>{gettotal()}</p>
            </div>
            <hr />
            <div className="divtotal">
              <p>Delivery fees</p>
              <p>{2}</p>
             
            </div>
            <hr />
            <div className="divtotal">
              <b>Total</b>
              <b>{gettotal()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/Placeorder')}>Proceed to checkout</button>
        </div>
      </div>


    </div>
  )
}

export default Cart