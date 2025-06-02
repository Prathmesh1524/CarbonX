import React from 'react';
import Image1 from "../assets/img/feature-1-img.png"

const FeaturesSection1 = () => {
  return <section className=' container mx-auto pb-[30px] lg:py-[120px] pt-0 '>
    <div className=' flex flex-col lg:flex-row gap-x-6'>
      {/* text */}
      <div className='max-w-[454px] mb-5 lg:mt-10 '
       data-aos="fade-right"
      data-aos-delay="300"
      >
      <h3 className='h3 mb-6'>Invest Smart</h3>
      <p className='text-gray-400 sectoin-subtitle mb-6 '>Get full statistic information about behaviour of  buyers and 
        sellers  will help you to make your decisions.</p>
        <button className='btn px-8'>Learn More</button>
      </div>
      {/* image */}
      <div className='flex-1 flex justify-end' 
      data-aos="fade-left"
      data-aos-delay="300">
        <img src={Image1} alt="" />
      </div>
    </div>
  </section>;
};

export default FeaturesSection1;
