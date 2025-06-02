import React from 'react';

//Import image
import Image from "../assets/img/hero-img.png"

//import icons
import { IoIosArrowDroprightCircle } from "react-icons/io"

const Hero = () => {
  return <section className='container mx-auto'>
    <div className='flex flex-col items-center lg:flex-row'>
      {/* Hero text */}
      <div className='flex-1'>
        {/* badge text */}
        <div className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]'
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <div className='flex items-center justify-between text-sm lg:text-base '>
            <div className='bg-white text-darkblue rounded-full font-medium py-1 px-3 hover:bg-white/70 cursor-pointer'>10 % OFF</div>
            <div className='text-md font-semibold'> New Launch Offer</div>
          </div>
        </div>
        {/* title  */}
        <h1 className='text-[32px] lg:text-[64px] font-bold leading-tight pb-6 '
         data-aos="fade-down"
          data-aos-delay="400"
       >Fastest & Secure platform for Carbon Trading </h1>
        <p className='max-w-[440px] mb-6 leading-relaxed'
         data-aos="fade-down"
          data-aos-delay="400"
        >Buy and sell Cabon Credits ,trusted by 1M wallets wiht over $20M Transaction via Crypto.</p>

        <button className='btn gap-x-3 pl-5 text-sm lg:h-16 lg:text-base'
         data-aos="fade-right"
          data-aos-delay="300"
          >Try Now
          <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
        </button>
      </div>
      {/* Hero img*/}
      <div className='flex-1' >
        <img src={Image} alt="" data-aos="fade-left"
          data-aos-delay="500" />
      </div>
    </div>

  </section>
}
export default Hero;
