import React from 'react';
import { FoodContext } from '../context/Context.jsx';
import { useContext } from 'react';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import MainItem from '../components/MainItem/MainItem.jsx';


export const Menu = (props) => {

  let { allproducts } = useContext(FoodContext);


  return (

    <div className='mt-0'>

      {/**Desktop */}
      <div className='hidden md:block'>

        <img src={props.banner} alt='Banner' className='w-[90%] h-[200px] object-cover mx-auto opacity-[0.95] mb-[5%]' />


        <div className='flex justify-evenly gap-[50%] items-center'>
          <p className=''> <span className='text-black font-semibold'>Showing 1-12</span> out of 48 products</p>
          <p className='flex items-center gap-2 cursor-pointer bg-gray-300 rounded-[25px] p-3'>Sort by <MdOutlineArrowDropDownCircle /> </p>
        </div>

        <div className=' grid grid-cols-[1fr,1fr,1fr,1fr]'>
          {allproducts.map((item, i) => {
            if (props.category === item.category) {
              return <MainItem key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
            } else {
              return null;
            }
          })}
        </div>

        <div className='mt-10 mb-10 mx-auto text-center'>
          <button className=' bg-gray-300 text-gray-400 p-3 rounded-[25px] cursor-pointer hover:shadow-2xl'>Explore More</button>
        </div>

      </div>

      {/**MObile */}
      <div className='md:hidden block'>

        <div className='w-[100%] h-[50px]'>

        </div>

        <img src={props.banner} alt='banner' className='w-[90%] h-[100px] object-cover mx-auto mb-[5%]' />
        
        <div className='flex justify-around items-center'>
          <p className=''> <span className='text-black font-semibold'>Showing 1-12</span></p>
          <p className='flex items-center gap-2 cursor-pointer bg-gray-300 rounded-[25px] p-3'>Sort by <MdOutlineArrowDropDownCircle /> </p>
        </div>

        <div className=' grid grid-cols-[1fr,1fr]'>
          {allproducts.map((item, i) => {
            if (props.category === item.category) {
              return <MainItem key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
            } else {
              return null;
            }
          })}
        </div>

        <div className='mt-10 mb-10 mx-auto text-center'>
          <button className=' bg-gray-300 text-gray-400 p-3 rounded-[25px] cursor-pointer hover:shadow-2xl'>Explore More</button>
        </div>

      </div>
    </div>
  );
}
