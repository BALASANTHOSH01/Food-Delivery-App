import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { RiTwitterXLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import logo from '../../Assets/images/foodspot_logo.jpg';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='w-screen text-center mt-5'>

            <div className='w-[80%] p-3 items-center text-center mx-auto'>
                <img src={logo} alt='Logo' className='w-[20%] mx-auto' />
                <p className=' font-Mochiy'>Food<span className=' font-Mochiy text-red-600'> Spot</span></p>

                <div className='flex gap-[7%] text-base font-medium items-center mt-7 mx-auto justify-center'>
                    <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer'>Company</motion.li>
                    <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer'>Products</motion.li>
                    <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer'>About</motion.li>
                    <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer'>Offices</motion.li>

                    <Link to={'/Conduct'} >
                        <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer'>Contact&#160;Us</motion.li>
                    </Link>
                </div>

                <div className='flex gap-[4%] mx-auto justify-center mt-7 mb-7'>
                    <a href='#insta' className=' no-underline text-2xl'> <AiFillInstagram /> </a>
                    <a href='#linkedin' className=' no-underline text-2xl'> <AiFillLinkedin /> </a>
                    <a href='#x.com' className=' no-underline text-2xl'> <RiTwitterXLine /> </a>
                </div>
            </div>
            <hr />
            <p className=' text-gray-500 mb-3 mt-3'>©All the rights are reserved for 2023</p>
            <hr className='mb-7' />

        </div>
    );
}
