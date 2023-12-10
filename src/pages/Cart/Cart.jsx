import React, { useEffect } from 'react';
import { useState } from 'react';


const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  const addtoCart = (items) => {
    console.log(items);
    setCartItems([...cartItems, items]);
  }

  return (
    <div className=''>
      {/* <div className='w-[400px] p-4 m-10 text-center mx-auto'>
        <img src={props.image} alt='img' className='w[100%]'/>
        {console.log(props.name)}
        <h2 className='text-xl'>{props.name}</h2>
        <div className='flex'>
          <p>{props.old_price}</p>
          <p>{props.new_price}</p>
        </div>
      </div> */}

      {cartItems.map((item, index) => (
        <li key={index}>
          {item.name} - {item.new_price}
        </li>
      ))}
      <script src='./Cart.js'></script>
    </div>
  )
}

export default Cart;