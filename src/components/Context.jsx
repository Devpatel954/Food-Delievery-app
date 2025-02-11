import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { useSearchParams } from "react-router-dom";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems,setcartItems] = useState({})

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removefromcart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const gettotal = ()=>{
        let totalam = 0;
        for (const item in cartItems) {

            if(cartItems[item]>0){
                let iteminfo = food_list.find((product)=>product._id===item)
                totalam = totalam+iteminfo.price*cartItems[item];
            }
         
                
            }

            return totalam;
        }
    

    const contextValue = {
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removefromcart,
        gettotal
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider