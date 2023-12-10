import React from 'react';
import { dataset_kerala, mostlyordered } from '../../Assets/mostlyordered.js';
import { Item } from '../Item/Item';

export const MostlyOrdered = () => {
    return (
        <div className='w-[100%]'>
            {/**Desktop */}
            <div className='hidden md:block items-center text-center mt-28'>
                <h1 className=' text-[50px]'>Mostly Ordered</h1>

                <div className=' w-screen'>
                    <h1 className='uppercase mt-10 text-2xl mb-16'>Snacks Items</h1>
                    <div className='grid grid-cols-[1fr,1fr,1fr,1fr] items-center text-left mt-5'>
                        {
                            dataset_kerala.map((item, i) => {
                                return <Item key={i} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                            })
                        }
                    </div>
                </div>

                <div className=' w-screen'>
                    <h1 className='uppercase mt-10 text-2xl mb-16'>Food Items</h1>
                    <div className='grid grid-cols-[1fr,1fr,1fr,1fr] items-center text-left mt-5'>
                        {
                            mostlyordered.map((item, i) => {
                                return <Item key={i} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                            })
                        }
                    </div>
                </div>

            </div>


            {/**Mobile */}
            <div className='md:hidden block items-center text-center mt-10'>
                <h1 className=' text-[20px]'>Mostly Ordered</h1>

                <div className=' w-screen'>
                    <h1 className='uppercase mt-10 text-lg mb-7'>Snacks Items</h1>
                    <div className='grid grid-cols-[1fr,1fr]'>
                        {
                            dataset_kerala.map((item, i) => {
                                return <Item key={i} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                            })
                        }
                    </div>
                </div>

                <div className=' w-screen'>
                    <h1 className='uppercase mt-10 text-lg mb-16'>Food Items</h1>
                    <div className='grid grid-cols-[1fr,1fr]'>
                        {
                            mostlyordered.map((item, i) => {
                                return <Item key={i} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}
