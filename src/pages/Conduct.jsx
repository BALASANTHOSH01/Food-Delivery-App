import React from 'react';

const Conduct = () => {

    const sendEmail = ()=>{

    }
    return (
        <div className='h-auto p-5 text-left shadow-slate-50 w-[600px] mx-auto' >
            <br/><br/><br/><br/>

            {/**Desktop */}
            <form className='hidden md:block bg-gray-400 w-[100%] text-left border-gray-950 mx-auto p-5' onsubmit="sendEmail(); reset(); return false;" autocomplete="off">

                <div className='w-[100%] flex gap-3'>
                
                <input className=' w-[100%] p-5 mt-3 border-black focus:outline-none' type="text" name="name" placeholder="Enter your name" id="name" required />
                <input className=' w-[100%] p-5 mt-3 border-gray-400 focus:outline-none' type="email" name="email" placeholder="email id" id="email" required />

                </div><br/>

                <input className=' w-[100%] p-5 mt-3 border-gray-400 focus:outline-none' type="text" id="phone" placeholder="Phone no." name="phone" required />

                <textarea className=' w-[100%] p-5 border-gray-400 mt-9 focus:outline-none' name="message" id="message" placeholder="Type your query...." cols="30" rows="10" required></textarea>

                <button className=' p-3 bg-red-500 rounded-[20px] w-[100%] mt-2 font-bold text-white' type="submit">Submit</button>

            </form>

            {/**Mobile */}
            <form className='block md:hidden bg-gray-400 w-[300px] text-left border-gray-950 mx-auto p-5' onsubmit="sendEmail(); reset(); return false;" autocomplete="off" >

                <div className='w-[100%] flex gap-3'>
                
                <input className=' w-[100%] p-5 mt-3 border-black ' type="text" name="name" placeholder="Enter your name" id="name" required />
                <input className=' w-[100%] p-5 mt-3 border-gray-400' type="email" name="email" placeholder="email id" id="email" required />

                </div><br/>

                <input className=' w-[100%] p-5 mt-3 border-gray-400' type="text" id="phone" placeholder="Phone no." name="phone" required />

                <textarea className=' w-[100%] p-5 mt-3 border-gray-400' name="message" id="message" placeholder="Type your query...." cols="30" rows="10" required></textarea>

                <button className=' p-3 bg-red-500 rounded-[20px] w-[100%] mt-2 font-bold text-white' type="submit">Submit</button>

            </form>

        </div>
    );
}

export default Conduct;
