import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';


const BreadScrem = ({ name, category }) => {

  return (
    <div>
      {/**Desktop */}
      <div className='hidden md:flex mt-10 items-center box-border ml-[10%] mb-[1%] text-sm'>
        HOME <RiArrowRightSLine className=' text-red-600 text-xl' /> MENU <RiArrowRightSLine className=' text-red-600 text-xl' /> {category} <RiArrowRightSLine className=' text-red-600 text-xl' /> {name}

      </div>

      {/**Mobile */}
      <div className='md:hidden flex mt-3 items-center box-border ml-[2%] mb-[1%] text-sm'>
      HOME <RiArrowRightSLine className=' text-red-600 text-sm' /> MENU <RiArrowRightSLine className=' text-red-600 text-sm' /> {category} <RiArrowRightSLine className=' text-red-600 text-sm' /> {name}

      </div>
    </div>

  )
}

export default BreadScrem;