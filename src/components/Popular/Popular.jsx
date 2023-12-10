import React from 'react';
import { dataset_kerala, dataset_tamilnadu } from '../../Assets/data';
import { Item } from '../Item/Item.jsx';

export const Popular = () => {
  return (

    <div className=' w-[100%]'>

      {/**Desktop */}
      <div className='hidden md:block text-center mt-28 mx-auto'>
        <h1 className='text-2xl mb-16'>POPULAR IN TAMILNADU</h1>
        {/* <hr className='w-[20%] h-2 mx-auto text-red-600'/> */}

        <div className='grid grid-cols-[1fr,1fr,1fr,1fr] mt-5 text-left p-6'>
          {dataset_tamilnadu.map((item, i) => {
            return <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
          })}
        </div>
      </div>

      {/**Mobile */}
      <div className='block md:hidden text-center mt-15 mx-auto w-screen'>
        <h1 className='text-lg mb-5'>POPULAR IN TAMILNADU</h1>
        {/* <hr className='w-[20%] h-2 mx-auto text-red-600'/> */}

        <div className='grid grid-cols-[1fr,1fr]'>
          {dataset_tamilnadu.map((item, i) => {
            return <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
          })}
        </div>
      </div>

    </div>

  );
}
