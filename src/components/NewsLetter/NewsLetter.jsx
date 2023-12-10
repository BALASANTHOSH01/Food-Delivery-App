import React from 'react'

export const NewsLetter = () => {
    return (
        <div>
            {/**Desktop */}
            <div className='hidden md:block mt-28 bg-gradient-to-b from-yellow-400 to-white w-[90%] mx-auto rounded-[25px]'>
                <div className='w-[100%] h-auto box-border items-center text-center mx-auto p-1'>
                    <h1 className=' text-black font-semibold text-2xl mt-28'>Get offer updates faster then others</h1>
                    <p className='text-black font-medium text-base mt-5'>Subscribe our NewsLetter for more updates</p>

                    <div className=' mt-10'>
                        <input type='text' placeholder='Email id' autoComplete="off" className=' border-2 active:border-none bg-white p-2 rounded-l-[20px] w-[400px] h-[50px]' />
                        <button className=' rounded-r-[20px] p-2 bg-slate-950 text-white  h-[50px]'>Subscribe</button>
                    </div>

                </div>
            </div>

            {/**Mobile */}
            <div className='md:hidden block bg-gradient-to-b from-yellow-400 to-white mx-auto rounded-[25px] mt-28'>
            <div className='w-[100%] h-auto box-border items-center text-center mx-auto p-1'>
                    <h1 className=' text-black font-semibold text-xl mt-20'>Get offer updates faster then others</h1>
                    <p className='text-black font-medium text-sm mt-5'>Subscribe our NewsLetter for more updates</p>

                    <div className=' mt-10'>
                        <input type='text' placeholder='Email id' autoComplete="off" className=' border-2 active:border-none bg-white p-2 rounded-l-[20px] w-[60%] h-[50px]' />
                        <button className=' rounded-r-[20px] p-2 bg-slate-950 text-white  h-[50px]'>Subscribe</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
