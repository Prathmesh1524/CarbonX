import React from 'react';

import Image from "../assets/img/why-img.png"

const Why = () => {
  return <section className='section'>
    <div className="container mx-auto "
    >
      <div className='flex flex-col items-center lg:flex-row gap-x-8 '>
      {/* image */}
      <div data-aos="fade-right">
        <img src={Image} alt="why-img" />
      </div>
      {/* text */}
      <div data-aos="fade-down" data-aos-offset ="300" className='max-w-[460px]'>
          <h2 className='section-title pt-5 '>Why you choose CRAPOO</h2>
          <p className='section-subtitle'>Experience the next Generation Carbon Exchange Platform.  No Financial Border ,extra fees and fake review's
          </p>
          <button className='btn px-6'>Learn more</button>
      </div>
      </div>
    </div>
  </section>;
};

export default Why;
