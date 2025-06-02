import React, { useState } from 'react';

import { currency } from '../data'
import { IoIosArrowForward } from "react-icons/io"
const Trade = () => {
  // items State
  const [itemName,setItemName] =useState("Bitcoin")

  return <section className="section bg-gradient-to-b from-[rgb(248,249,251)] to-[#fafbff]
   text-darkblue lg:pt-[320px] lg:-mt-[320px]">
    <div className="container mx-auto">
      <h2 className='section-title text-center mb-16' 
        data-aos="fade-up"
        data-aos-delay="300"
      >Trade Securely and market the high growth cryptocurrencies. </h2>
      {/* items */}
      <div className='flex flex-col gap-[38px] lg:flex-row' 
        data-aos="fade-down"
      >
        {currency.map((item, index) => {
          // Destructure the Data
          const { image, name, abbr, description } = item;
          return <div onClick={()=> setItemName(name)}
          className={`${name === itemName ? 'bg-violet text-white' : "bg-white"}
           w-full rounded-2xl py-12 px-8 shadow-primary cursor-pointer transition-all 
          duration-300`} key={index}>
            {/* item */}
            <div className='flex flex-col justify-center items-center'>
              {/* item image  */}
              <img className='mb-12' src={image} alt="" />
              {/* item name */}
              <div className='mb-4 flex gap-x-4'>
                <div className='text-[32px] font-bold'>{name}</div>
                <div className='text-lg text-gray-500'>{abbr}</div>
              </div>
              {/* item description */}
              <p className='text-md font-semibold pb-6 justify-center text-cenrer'> {description}</p>
              {/* btn */}
              <button  className={`${name === itemName ? " text-white  bg-blue hover:bg-blue-hover pl-8 pr-6 gap-x-3  ": "bg-white w-16 text-blue"}
              border-2 border-gray-600 rounded-full p-4 h-16 flex justify-center
               items-center`}>
                {name === itemName && <div className='font-semibold text-lg'>Start Trading</div>}
                <IoIosArrowForward className={`${name === itemName ? "text-2xl" : "text-3xl" }`}/>
               </button>
            </div>
          </div>
        })}
      </div>
    </div>
  </section>;
};

export default Trade;
