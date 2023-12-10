import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Veg from '../../../Assets/images/Veg/veg_banner.jpg';
import NonVeg from '../../../Assets/images/NonVeg/nonveg_banner.jpg';
import Snacks from '../../../Assets/images/Snacks/snacks_banner.jpg';
import { Link } from 'react-router-dom';

const MenuList = () => {
    return (
        <div>
            {/**Veg */}
            <div className=' border-black outline-[1px] p-2 mx-auto text-center h-[200px] mb-10 mt-10'>
                <h1 className='text-2xl mb-5'>Wants to Order the <span className=' text-red-600'>Veg</span></h1>
                <div className='flex items-center mx-auto'>
                    <img src={Veg} alt='Veg-Banner' className=' w-[80%] rounded-[25px]' />

                    <Link to={'/Veg'} className=' w-[10%] text-[30px] ml-[7%] cursor-pointer'>
                        <BsFillArrowRightCircleFill />
                    </Link>

                </div>
            </div>

            {/**Non-Veg */}
            <div className=' border-black outline-[1px] p-2 mx-auto text-center h-[200px] mb-10 mt-10'>
                <h1 className='text-2xl mb-5'>Wants to Order the <span className=' text-red-600'>NonVeg</span></h1>
                <div className='flex items-center mx-auto'>
                    <img src={NonVeg} alt='NonVeg-Banner' className=' w-[80%] rounded-[25px] h-[150px]' />

                    <Link to={'/NonVeg'} className=' w-[10%] text-[30px] ml-[7%] cursor-pointer'>
                        <BsFillArrowRightCircleFill />
                    </Link>

                </div>
            </div>

            {/**Snacks */}
            <div className=' border-black outline-[1px] p-2 mx-auto text-center h-[200px] mb-20 mt-10'>
                <h1 className='text-2xl mb-5'>Wants to Order the <span className=' text-red-600'>Snacks</span></h1>
                <div className='flex items-center mx-auto'>
                    <img src={Snacks} alt='Snacks-Banner' className=' w-[80%] rounded-[25px] h-[150px]' />

                    <Link to={'/Snacks'} className=' w-[10%] text-[30px] ml-[7%] cursor-pointer'>
                        <BsFillArrowRightCircleFill />
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default MenuList;