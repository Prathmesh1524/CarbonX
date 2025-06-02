import React from 'react';

import CalculateForm from "./CalcForm"

const Calculate = () => {
  return <section className='section' >
    <div className="container mx-auto">
      {/* text */}
      <div className='text-center '> 
        <h2 className='section-title'
          data-aos="fade-up"
          data-aos-offset="300"
        >
          Check how much credit you can earn. </h2>
        <p className='section-subtitle text-white/60 max-w-[622px] mx-auto'
          data-aos="fade-up"
          data-aos-offset="300"
          
       >Let's Check your hash rate to see how much you will earn today .</p>
      </div>
      {/* form */}
      <CalculateForm /> 
    </div>
  </section >;
};

export default Calculate;
