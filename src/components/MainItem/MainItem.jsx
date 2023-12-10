import React from 'react'
import { Link } from 'react-router-dom';

const MainItem = (props) => {

  return (
    <div className=' w-[90%] items-center mt-[20%] border-solid border-black hover:bg-gray-200 hover:shadow-xl  text-center mx-auto p-4 rounded-[25px]'>

        <Link to={`/product/${props.id}`}>
        
        <img onClick={window.scrollTo(0,0)} src={props.image} alt='item-images' className='rounded-[25px] w-[80%] h-[220px] mx-auto mt-5'/>
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
  )
}

export default MainItem;