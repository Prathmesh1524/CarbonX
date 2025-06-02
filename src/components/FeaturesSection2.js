import React from 'react';

import Image2 from "../assets/img/feature-2-img.png"

const FeaturesSection2 = () => {
  return <section className='py-[30px] lg:py-[120px]'>
    <div className='container mx-auto flex flex-col lg:flex-row justify-between gap-x-9
    '> 
      {/* img */}
      <div className='pb-10 flex-1 '
      data-aos="fade-right"
      data-aos-delay="400"
      >
        <img src={Image2} alt="Img2" />
      </div>
        {/* text */}
      <div className='max-w-[434px]  justify-end'
      data-aos="fade-left"
      data-aos-delay="200"
      >
        <h3 className='h3 pb-6'>Detailed Statistics </h3>
        <p className='text-gray-400 mb-6'>View all trading realated informateion in real time,
          at any point,at any location and decide which polls you want to 
          trade.
        </p>
        <button className='btn px-8'>Learn more</button>
      </div>
    </div>
  </section>
};

export default FeaturesSection2;
