import React from 'react';
import HeroImg from '../../Assets/images/Hero-img.jpg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className='w-[100%] bg-gradient-to-b from-yellow-400 to-white p-16 rounded-t-[25px]'>

            {/**Desktop */}
            <div className='hidden md:flex p-2 items-center w-[100%] mx-auto justify-evenly mt-16'>

                {/**Left hero */}
                <div>
                    <p className=' text-[20px]'>Tamil naattu Samayal Murai</p>

                    <div className='flex gap-2 p-1'>
                        <h2 className='text-[40px]'>Just</h2>
                        <p className='text-[40px]'>😋</p>
                    </div>

                    <p className='text-[50px]'>feel</p>
                    <p className='text-[50px]'>the Taste</p>
                    <button className=' bg-red-600 p-3 mt-3 border-none rounded-[25px] text-white flex items-center gap-3 text-[15px] hover:shadow-2xl'>Order your food <BsFillArrowRightCircleFill /> </button>
                </div>

                {/**Right Hero */}
                <div>
                    <div className='w-[400px]'>
                        <img src={HeroImg} alt='HeroImage' className=' shadow-lg shadow-gray-500 rounded-[25px]' />
                    </div>
                </div>

            </div>

            {/**Mobile */}
            <div className='md:hidden mt-20'>

                <div className='mt-10 text-center'>
                    <p className=' text-[20px]'>Tamil naattu Samayal Murai</p>

                    <div className='flex gap-7 p-1 justify-center'>
                        <h2 className='text-[40px]'>Just</h2>
                        <p className='text-[40px]'>😋</p>
                    </div>

                    <p className='text-[50px]'>feel</p>
                    <p className='text-[50px]'>the Taste</p>

                    <Link to={'/MenuList'}>
                        <button className=' bg-red-600 p-3 mt-3 border-none rounded-[25px] text-white flex items-center gap-3 text-[15px] hover:shadow-2xl mx-auto'>Order your food <BsFillArrowRightCircleFill /> </button>
                    </Link>
                </div>

                <div className='mt-16 w-[80%] mx-auto'>
                    <img src={HeroImg} alt='HeroImage' className='shadow-lg shadow-gray-500 rounded-[25px]' />
                </div>

            </div>

        </div>
    );
}
