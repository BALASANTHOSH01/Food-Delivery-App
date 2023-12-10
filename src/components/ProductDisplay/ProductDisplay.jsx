import React, { useContext, useCallback } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { FoodContext } from '../../context/Context';
// import { addtoCart } from '../../pages/Cart/Cart.jsx';
import Cart from '../../pages/Cart/Cart.jsx';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {

  const {addtoCart} = useContext(FoodContext);

  // async function handleAddToCart () {
  //   // Call addToCart function from Cart component
  //   Cart.addtoCart(props);
  // };

  return (
    <div className=''>
      {/**Desktop */}
      <div className='hidden md:flex'>

        <div className='flex w-[100%] items-center'> {/**Left side */}
          <div className=' w-[100%]'>

            <img src={props.image} alt='' className='rounded-[25px] w-[35%] h-[20%] mx-auto mt-5' />
            <img src={props.image} alt='' className='rounded-[25px] w-[35%] h-[20%] mx-auto mt-5' />
            <img src={props.image} alt='' className='rounded-[25px] w-[35%] h-[20%] mx-auto mt-5' />

          </div>

          <div className=' w-[100%] left-0'>
            <img src={props.image} alt='' className='rounded-[25px] w-[100%] h-[80%] mx-auto mt-5' />
          </div>
        </div>

        <div className=' w-[50%] ml-[10%]'> {/**Right side */}

          <div className=''>
            <h2 className=' text-2xl'>{props.name}</h2>

            <div className='flex items-center gap-[0.4%] mt-3'>
              <BsStarFill className=' text-yellow-500' /><BsStarFill className=' text-yellow-500' /><BsStarFill className=' text-yellow-500' /><BsStarFill className=' text-yellow-500' /><BsStarHalf className=' text-yellow-500' />
              <p>(1245)</p>
            </div>

            <div className='flex gap-[10%] mt-[10%] items-center'>
              <p className=' text-base line-through text-gray-400'>₹{props.old_Price}</p>
              <p className=' text-lg text-red-600 font-semibold'>₹{props.new_Price}</p>
            </div>

            <p className='mt-[10%] box-border'>Enjoy your favorite {props.name}. Access the special offers and discounts, making the ordering process convenient and satisfying.</p>

            <Link to={'/Cart'}>
            
            <button className=' bg-red-600 text-white text-medium p-5 rounded-[25px] mt-[8%]' onClick={() => addtoCart(props)} >ADD TO CART</button>
            </Link>


            <div className='mt-[8%]'>
              <p> <span className=' font-semibold'>Category :</span> {props.category}</p>
            </div>

          </div>

        </div>

      </div>

      {/**Mobile */}
      <div className='md:hidden block mt-10'>

        <div className='flex justify-around mx-auto mb-10'>
          <h2 className='text-2xl text-center mt-6 mx-auto'><span className='text-red-600'>Dish name :</span> {props.name}</h2>
        </div>

        <div className='flex'>
          <div className=' mx-auto w-[20%] box-border'>
            <img src={props.image} alt='SubImage' className=' w-[60%] h-[25%] rounded-[10px] mt-3' />
            <img src={props.image} alt='SubImage' className=' w-[60%] h-[25%] rounded-[10px] mt-3' />
            <img src={props.image} alt='SubImage' className=' w-[60%] h-[25%] rounded-[10px] mt-3' />
          </div>
          <img src={props.image} alt='MainImage' className=' rounded-[15px] box-border w-[50%] mx-auto ml-[-20px]' />
        </div>

        <div className='flex items-center justify-around mt-5'>
          <div className='mt-10'>
            
            <div className=' text-center'>
              <p className=' text-sm line-through text-gray-400'>₹{props.old_Price}</p>
              <p className=' text-lg text-red-600 font-semibold'>₹{props.new_Price}</p>
            </div>

            <div className='flex gap-2 mt-5'>
              <div className='flex text-center'>
                <BsStarFill className=' text-yellow-500' /><BsStarFill className=' text-yellow-500' /><BsStarFill className=' text-yellow-500' /><BsStarFill className=' text-yellow-500' /><BsStarHalf className=' text-yellow-500' />
              </div>
              <p className='text-sm'>(1000)</p>
            </div>

          </div>

          <div className='w-[60%]'>
            <button className=' bg-red-600 text-white text-medium p-5 rounded-[25px] mt-[8%] w-[80%] ml-[10%]' onClick={() => addtoCart(props)} >ADD TO CART</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDisplay;