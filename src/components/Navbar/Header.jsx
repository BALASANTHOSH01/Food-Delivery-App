import logo from '../../Assets/images/foodspot_logo.jpg';
import user from '../../Assets/images/user.png';
import { HiMenuAlt1 } from 'react-icons/hi';
import { LuBaggageClaim } from 'react-icons/lu';
import { MdCancel } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import '../../index.css';


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';


const Header = () => {

  //Menu Open & Close function
  var closenav = (e) => {
    // e.preventDefault();
    document.getElementById("nav-bar").style.width = "0%";
    document.body.style.backgroundColor = "white";
  }

  var opennav = (e) => {
    e.preventDefault();
    let Nav = document.getElementById("nav-bar");
    Nav.style.width = "100%";
    Nav.addEventListener("click",function(e){
      if(e.target.tagName == 'A'){
        closenav();
      }
    })
  }

  //Menu underline for element
  const [activeitem, setActiveItem] = useState("home");


  return (

    <div className='relative'>

      {/**Desktop Screen*/}
      <header className='hidden md:flex gap-5 p-5 justify-between items-center text-center  z-50 w-screen bg-slate-300 rounded-b-[25px]'>

        {/**LOGO */}
        <div className='text-center flex items-center gap-1'>
          <img src={logo} alt='Logo' className="w-10 h-10 object-cover rounded-[50%]" />
          <p className='text-black font-Mochiy ml-1'>Food&#160;<span className='text-red-600 font-Mochiy'>Spot</span></p>
        </div>

        {/**Section items */}
        <div className='flex gap-6 items-center'>

          <ul className='flex gap-10 items-center'>

            <Link to={"/"}>
              <motion.li whileTap={{ scale: 0.6 }} className=' hover:text-orange-600 duration-200 font-segoe text-sm' onClick={() => { setActiveItem("home") }}>

                HOME

                {activeitem === "home" ? <hr className=' w-[100%] h-[2px] border-none bg-red-600' /> : <></>}

              </motion.li>
            </Link>

            <Link to={"/NonVeg"}>
              <motion.li whileTap={{ scale: 0.6 }} className=' hover:text-orange-600 duration-200 font-segoe text-sm' onClick={() => { setActiveItem("non-veg") }}>

                NON-VEG

                {activeitem === "non-veg" ? <hr className=' w-[100%] h-[2px] border-none bg-red-600' /> : <></>}
              </motion.li>
            </Link>

            <Link to={"/Veg"}>
              <motion.li whileTap={{ scale: 0.6 }} className=' hover:text-orange-600 duration-200 font-segoe text-sm' onClick={() => { setActiveItem("veg") }}>

                VEG

                {activeitem === "veg" ? <hr className=' w-[100%] h-[2px] border-none bg-red-600' /> : <></>}

              </motion.li>
            </Link>

            <Link to={"/Snacks"}>
              <motion.li whileTap={{ scale: 0.6 }} className=' hover:text-orange-600 duration-200 font-segoe text-sm' onClick={() => { setActiveItem("snacks") }}>

                SNACKS

                {activeitem === "snacks" ? <hr className=' w-[100%] h-[2px] border-none bg-red-600' /> : <></>}

              </motion.li>
            </Link>

            {/**Cart icon */}
            <Link to={'/Cart'}>
              <motion.div whileTap={{ scale: 0.6 }} className='flex items-center relative'>

                <LuBaggageClaim className='text-xl duration-200 cursor-pointer' />
                <div className='bg-red-500 w-5 h-5 text-center rounded-[50%] items-center absolute -top-4 right-0 left-3'>
                  <p className='text-white text-sm font-semibold'>2</p>
                </div>

              </motion.div>
            </Link>

          </ul>

          {/**User */}
          <Popup trigger={
            <motion.div whileTap={{ scale: 0.6 }} className='mr-4 '>
              <img src={user} alt="user" className='w-8 h-8 ml-5 rounded-[50%] cursor-pointer' id='user-img' />
            </motion.div>
          } position={'right center'} modal nested >
            {

              close => (

                <div className='w-[600px] h-[200px] p-1 z-50 overflow-hidden'>


                  <p className='text-[25px] no-underline float-right cursor-pointer' onClick={() => { close() }} >
                    <MdCancel className='hover:opacity-[0.1] hover:duration-300' />
                  </p>

                  <div className=' box-border items-center mx-auto'>

                    <Link to={"/Signup"}>
                      <div className='flex gap-1 items-center border-black justify-center mt-12 mb-5 hover:opacity-[0.1] hover:duration-300'>
                        <MdEmail className='text-[45px]' /> <span className='font-semibold uppercase ml-3'> Signup </span>
                      </div>
                    </Link>

                    <hr />



                    <Link to={"/Login"}>
                      <div className='flex gap-1 items-center border-black justify-center mt-5 hover:opacity-[0.1] hover:duration-300'>
                        <MdEmail className='text-[45px]' /> <span className='font-semibold uppercase ml-3'> Login </span>
                      </div>
                    </Link>
                  </div>

                </div>
              )
            }
          </Popup>


        </div>

      </header>


      {/**Mobile Screen */}
      <header className='flex md:hidden p-5 justify-between text-3xl mr-4 items-center  z-40 w-screen bg-slate-300'>

        <div className='flex items-center w-10 h-10 ml-1 gap-1'>
          <img src={logo} alt='' className='rounded-[50%] ' />
          <p className='text-black font-Mochiy text-lg'>Food&#160;<span className='text-orange-500'>Spot</span></p>
        </div>

        <div className='mr-4 flex items-center gap-10 cursor-pointer'>

          <motion.div whileTap={{ scale: 0.5 }}>
            <p onClick={opennav} >
              <HiMenuAlt1 />
            </p>
          </motion.div>

        </div>

      </header>

      {/**Half-screen Menu */}
      <div className='w-0 h-[100%] fixed left-0 top-0 z-60 duration-500 text-center overflow-x-hidden bg-white' id='nav-bar'>

        <a className=' top-0 text-[2.5rem] float-left ml-5 mt-5 h-5 text-center hover:text-black' href='javascript.void(0)' onClick={closenav}>&times;</a>

        <div className='mt-[50px]'>
          <Link to={'/Veg'}>
            <a className='duration-300 block p-4 text-lg hover:bg-gray-200 no-underline z-50' href='#about'>Veg</a>
          </Link>

          <Link to={'/NonVeg'}>
            <a className='duration-300 block p-4 text-lg  hover:bg-gray-200 no-underline z-50' href='#orders'>Non-Veg</a>
          </Link>

          <Link to={"/Snacks"}>
            <a className='duration-300 block p-4 text-lg hover:bg-gray-200 no-underline z-50' href="#snacks">Snacks</a>
          </Link>

          <Link to={"/Conduct"}>
            <a className='duration-300 block p-4 text-lg hover:bg-gray-200 no-underline z-50' href="#support">Support</a>
          </Link>
        </div>




      </div>

    </div>
  );
}

export { Header };