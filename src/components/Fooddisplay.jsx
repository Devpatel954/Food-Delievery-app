import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from './Context'
import Fooditem from './Fooditem'

const Fooddisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div>

      <div className="food-dislay" id='food-dislay'>
    <h2>Top flavours near you</h2>
    <div className="food-display-list">
        {food_list.map((item,index)=>{
            if(category==='All'||category===item.category){
                return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/> 
            }
           
        })}
    </div>
      </div>

    </div>
  )
}

export default Fooddisplay