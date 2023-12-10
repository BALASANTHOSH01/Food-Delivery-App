import React from 'react';
import { Link } from 'react-router-dom';

export const Item = (props) => {


  return (
    <div>
      {/**Desktop */}
      <div className='hidden md:block w-[90%] items-center border-solid border-black hover:shadow-xl hover:bg-gray-200 text-center mx-auto p-4 rounded-[25px] '>

        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0, 0)} src={props.image} alt='item-images' className='rounded-[25px] w-[100%] h-[220px] mx-auto mt-5' />
        </Link>

        <p className=' m-3 mx-auto items-center'>{props.name}</p>

        <div className='flex justify-around items-center'>
          <div className='text-lg '>
            <p className=' m-3 mx-0 text-red-600 font-bold'>₹{props.new_price}</p>
          </div>

          <div className='text-lg'>
            <p className=' m-3 mx-0 text-gray-400 font-bold line-through'>₹{props.old_price}</p>
          </div>
        </div>

      </div>

      {/**Mobile */}
      <div className='md:hidden block items-center border-solid border-black hover:shadow-xl hover:bg-gray-200 text-center mx-auto rounded-[25px] p-2 w-[80%] mt-5'>

        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0, 0)} src={props.image} alt='item-images' className='rounded-[25px] w-[80%] h-[220px] mx-auto mt-5' />
        </Link>

        <p className=' m-3 mx-auto items-center'>{props.name}</p>

        <div className='flex justify-around items-center'>
          <div className='text-lg '>
            <p className=' m-3 mx-0 text-red-600 font-bold'>₹{props.new_price}</p>
          </div>

          <div className='text-lg'>
            <p className=' m-3 mx-0 text-gray-400 font-bold line-through'>₹{props.old_price}</p>
          </div>
        </div>

      </div>
    </div>

  );
}
