import React from 'react';

import Image3 from "../assets/img/feature-3-img.png"

const FeaturesSection3 = () => {
  return<section className=' container mx-auto py-[30px] lg:py-[120px] pt-0 '>
    <div className=' flex flex-col lg:flex-row gap-x-6'>
      {/* text */}
      <div className='max-w-[408px] mb-5 lg:mt-10 '
       data-aos="fade-right"
      data-aos-delay="300"
      >
      <h3 className='h3 mb-6'>Grow your Profit and and track your investment</h3>
      <p className='text-gray-400 sectoin-subtitle mb-6 '>Get advanaceded analystical tools. Clear 
        TradingView charts let you current and historical profit investment. </p>
        <button className='btn px-8'>Learn More</button>
      </div>
      {/* image */}
      <div className='flex-1 flex justify-end' 
      data-aos="fade-left"
      data-aos-delay="300">
        <img src={Image3} alt="" />
      </div>
    </div>
  </section>;
};

export default FeaturesSection3;
