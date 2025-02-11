import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../assets/assets'
import { StoreContext } from './Context'

const Fooditem = ({id,name,price,description,image}) => {

   
    const{cartItems,addToCart,removefromcart}=useContext(StoreContext);
  return (
    <div className='fooditem'>
        <div className="fooditemimgcont">
            <img className='fooditemimg'src={image} alt="" />
                {!cartItems[id]?<img className='add' onClick={()=>addToCart(id)}src={assets.add_icon_white}/>: <div className="food-item-counter">
                    <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
        <div className="food-item-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
            </div>
            <p className="fooditemdes">
                {description}
            </p>
            <p className="fooditemprice">
                {price}
            </p>
        </div>
        
    </div>
  )
}

export default Fooditem