import React, { useState } from 'react'
import { createContext } from 'react';
import {allproducts} from '../Assets/allproducts.js';

const FoodContext = createContext();

const getDefaultcart = ()=>{
  let cart={};

  for (let index = 0; index < allproducts.length+1; index++) {
    cart[index]=0;
    
  }
  return cart;
}

const FoodContextProvider = (props) => {

  const [cartItem,setCartItem]=useState(getDefaultcart);

  const addtoCart = (itemId) => {
    setCartItem((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
    console.log(addtoCart);
  };

  const removefromCart = (itemId) => {
    if (cartItem[itemId] && cartItem[itemId] > 0) {
      setCartItem((prevCart) => ({
        ...prevCart,
        [itemId]: prevCart[itemId] - 1,
      }));
    }
  };

   const contextvalues = {allproducts,cartItem,addtoCart,removefromCart};
   
  return (
    <FoodContext.Provider value={contextvalues}>
       {props.children}
    </FoodContext.Provider>
  );

}

export {FoodContextProvider,FoodContext} ;