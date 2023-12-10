import React from 'react';

const Description = () => {
    return (
        <div>
            {/**Desktop */}
            <div className='hidden md:block w-[80%] box-border mx-auto mt-[10%]'>
                <div className='flex'>
                    <div className=' p-4 border-gray-400 border-[1px] '>Description</div>
                    <div className=' p-4 border-gray-400 border-[1px] '>Reviews(1267)</div>
                </div>

                <div className=' border-gray-400 border-[1px] p-6 text-sm'>
                    <p>
                        This our latest ecommerce product, a game-changer in convenience and style. Whether you're a seasoned shopper or new to online retail, our product offers a seamless, user-friendly experience. Explore an extensive range of items, handpicked for quality, variety, and affordability. <br /><br />

                        Our ecommerce product simplifies the buying process, providing secure transactions, efficient shipping, and responsive customer support. Discover the perfect blend of practicality and aesthetics. Elevate your online shopping journey with this innovative addition to your life.
                    </p>

                </div>
            </div>

            {/**Mobile */}
            <div className='md:hidden block w-[90%] box-border mx-auto mt-[15%]'>
                <div className='flex'>
                    <div className=' p-4 border-gray-400 border-[1px] w-[100%]'>Description</div>
                    <div className=' p-4 border-gray-400 border-[1px] w-[100%]'>Reviews(1267)</div>
                </div>

                <div className=' border-gray-400 border-[1px] p-6 text-sm'>
                    <p>
                        This our latest ecommerce product, a game-changer in convenience and style. Whether you're a seasoned shopper or new to online retail, our product offers a seamless, user-friendly experience. Explore an extensive range of items, handpicked for quality, variety, and affordability. <br /><br />

                        Our ecommerce product simplifies the buying process, providing secure transactions, efficient shipping, and responsive customer support. Discover the perfect blend of practicality and aesthetics. Elevate your online shopping journey with this innovative addition to your life.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Description;