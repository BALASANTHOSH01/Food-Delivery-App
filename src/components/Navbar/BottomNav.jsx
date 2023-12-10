import React from 'react';
import { motion } from 'framer-motion';
import Popup from 'reactjs-popup';
import { GiCancel } from 'react-icons/gi';
import { RiHome2Fill } from 'react-icons/ri';
import {BsViewList} from 'react-icons/bs';
import user from '../../Assets/images/user.png';

// import {Link} from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config';
import { Link } from 'react-router-dom';


export default function BottomNav() {
    //Login
    const fireBaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    async function Googlelogin() {
        const response = signInWithPopup(fireBaseAuth, provider);
        console.log(response);
    }

    return (

        <div className='flex md:hidden fixed z-50 p-4 w-screen bottom-0 justify-evenly items-center bg-white'>

            {/**Home */}
            <Link to={'/'}>
                <motion.div whileTap={{ scale: 0.6 }} className='mr-14'>
                    <RiHome2Fill className='text-xl' />
                </motion.div>
            </Link>


            {/**Ricebowl icon */}
            <Link to={'/MenuList'}>
                <motion.div whileTap={{ scale: 0.6 }} >
                    <BsViewList className='text-xl' />
                </motion.div>
            </Link>

            {/**User Authentication */}
            <Popup trigger={
                <motion.div whileTap={{ scale: 0.6 }} className='ml-14'>
                    <img src={user} alt="user" className='rounded-[50%] box-border w-7 cursor-pointer' />
                </motion.div>
            } modal nested position={'right center'}>

                {
                    close => (
                        <div className=' h-[250px] p-3' >

                            <div className='flex justify-between items-center'>
                                <h2 className='item-center font-semibold text-lg font-Mochiy'>Login/<span className='text-orange-400'>Signup</span></h2>
                                <a onClick={() => { close() }} href='#www'>
                                    <GiCancel className='text-lg' />
                                </a>
                            </div>

                            <div className='mt-8'>
                                <Link to={'/Signup'}>
                                    <a className='flex gap-2 items-center justify-center mb-5 text-xl' href="#www">
                                        SignUp
                                    </a>
                                </Link>

                                <p className='text-center mb-5'>- or -</p>

                                <Link to={'/Login'}>
                                    <a className='flex items-center gap-2 justify-center text-xl' href="#www">
                                        LogIn
                                    </a>
                                </Link>

                            </div>
                        </div>
                    )
                }

            </Popup>

        </div>
    );
}

