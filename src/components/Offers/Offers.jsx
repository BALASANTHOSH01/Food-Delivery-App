import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import offer from '../../Assets/images/offer.jpg';
import lastminute_offer from '../../Assets/images/lastminute_offer1.jpg'

export const Offers = () => {
  return (
    <div>
      {/**Desktop */}
      <div className='hidden md:block p-5 mt-28 bg-gradient-to-r from-yellow-400 to-red-500 items-center mx-auto border-2 w-[80%] rounded-[25px]'>

        <div className='flex gap-20 items-center justify-center mt-3'>
          <h1 className=' font-semibold text-red-600 text-2xl uppercase'>Just Grap your offer<hr className=' text-red-600 font-extrabold' /></h1>
        </div>

        <div className='flex gap-5 justify-evenly items-center mt-12'>

          <div className='text-left items-center'>
            <h1 className='text-[40px] m-2 mt-2'>Foody</h1>
            <h1 className='text-[50px] m-2 mt-2'>festival</h1>
            <h2 className='text-[50px] m-2 mt-2'>from today</h2>
            <p className='text-[15px] m-2 mt-2'>Order your food from top restaurant</p>
            <button className=' p-4 text-white bg-red-600 rounded-[25px] flex items-center gap-1 m-2 hover:shadow-2xl'>Grap it  <BsFillArrowRightCircleFill /> </button>

          </div>

          <div>
            <img src={offer} alt='Biryani' className='w-[300px] h-[350px] rounded-[25px]' />
          </div>

        </div>

      </div>

      {/**Mobile */}
      <div className='md:hidden block p-3 mt-28 bg-gradient-to-r from-yellow-400 to-red-500 items-center mx-auto border-2 w-[80%] rounded-[25px]'>

        <div className='flex gap-20 items-center justify-center mt-3'>
          <h1 className=' font-semibold text-red-600 text-2xl uppercase'>Just Grap your offer<hr className=' text-red-600 font-extrabold' /></h1>
        </div>

        <div className='flex gap-5 justify-around items-center mt-12'>

          <div className='text-left items-center ml-4'>
            <h1 className='text-[20px] m-2 mt-2'>Foody</h1>
            <h1 className='text-[30px] m-2 mt-2'>festival</h1>
            <h2 className='text-[30px] m-2 mt-2'>from today</h2>
            <p className='text-[7px] m-2 mt-2'>Order your food from top restaurant</p>
            <button className=' p-2 text-white bg-red-600 rounded-[25px] flex items-center gap-1 m-2 hover:shadow-2xl'>Grap it  <BsFillArrowRightCircleFill /> </button>

          </div>

          <div>
            <img src={offer} alt='Biryani' className='w-[65%] h-[200px] rounded-[25px]' />
          </div>

        </div>

      </div>
    </div>
  );
}
