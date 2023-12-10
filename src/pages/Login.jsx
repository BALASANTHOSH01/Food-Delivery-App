import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            {/**Desktop */}
            <div className='hidden md:block w-screen mt-12 '>
                <div className=' w-[600px] h-[380px] mx-auto text-center bg-gray-300 p-5 rounded-[25px] mb-12'>

                    <h1 className=' text-2xl mb-5'>Login</h1>

                    <div>
                        <input type='email' placeholder='Email Address' className=' border-2 w-[80%] p-4 rounded-[25px] mt-3 focus:outline-none' /><br />
                        <input type='password' placeholder='Password' className=' border-2 w-[80%] p-4 rounded-[25px] mt-3 focus:outline-none' />
                    </div>

                    <button className=' bg-red-600 p-3 text-white rounded-[25px] mt-3 w-[80%] hover:shadow-lg'>Continue</button>
                    <p className=' mt-4'>Not have an account? <span className=' text-red-600 cursor-pointer'><Link to={'/Signup'}>Signup Here</Link></span></p>

                </div>
            </div>


            {/**Mobile */}
            <div className='md:hidden block w-screen mt-12'>

                <div className=' w-[400px] h-[350px] mx-auto text-center bg-gray-300 p-4 rounded-[25px] mb-12'>
                    <h1 className=' text-2xl mb-5'>Login</h1>

                    <div>
                        <input type='email' placeholder='Email Address' className=' border-2 w-[80%] p-3 rounded-[25px] mt-3 focus:outline-none' /><br />
                        <input type='password' placeholder='Password' className=' border-2 w-[80%] p-3 rounded-[25px] mt-3 focus:outline-none' />
                    </div>

                    <button className=' bg-red-600 p-3 text-white rounded-[25px] mt-4 w-[80%] hover:shadow-lg'>Continue</button>
                    <p className=' mt-4'>Don't have an account? <span className=' text-red-600 cursor-pointer'><Link to={'/Signup'}>Signup Here</Link></span></p>


                </div>

            </div>
        </div>
    );
}

export default Login;