import React from 'react';
import { dataset_tamilnadu } from '../../Assets/data';
import { Item } from '../Item/Item';

const RelatedProduct = () => {
  return (
    <div className=''>
      {/**Desktop */}
      <div className='hidden md:block mt-[10%] mx-auto text-center'>
        <h1 className=' text-2xl font-semibold'>Related Products<hr className='  w-[15%] h-[10px] border-black mx-auto' /></h1>

        <div className='w-[screen] grid grid-cols-[1fr,1fr,1fr,1fr]'>
          {dataset_tamilnadu.map((item, i) => {
            return <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
          })}
        </div>
      </div>

      {/**Mobile */}
      <div className='md:hidden block  mt-[10%] mx-auto text-center '>
        <h1 className=' text-2xl font-semibold'>Related Products<hr className='  w-[15%] h-[10px] border-black mx-auto' /></h1>

        <div className=' grid grid-cols-[1fr,1fr] '>
          {dataset_tamilnadu.map((item, i) => {
            return <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
          })}
        </div>
      </div>

    </div>
  )
}

export default RelatedProduct;