import React from 'react';
import {HiChartBar,HiUser,HiGlobe} from "react-icons/hi"

const Stats = () => {
  return <section className='pt-24' 
  data-aos="fade-up"
  data-aos-delay="300"
>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-6 items-center justify-center lg:flex-row lg:justify-between'>
          {/* items icon */}
          <div className='flex items-start gap-x-4'>
            <div className='bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-2xl text-blue lg:text-4xl'>
            < HiChartBar/>
            </div>
            {/* item text */}
            <div>
              <div>
                <div className='text-2xl font-bold lg:text-3xl lg:mb-4 '>$1M</div>
                <div className='text-white/60'>Carbon Credits Transferd</div>
              </div>
            </div>            
          </div>
            <div className='flex items-start gap-x-4'>
            <div className='bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-2xl text-blue lg:text-4xl'>
            < HiUser/>
            </div>
            {/* item text */}
            <div>
              <div>
                <div className='text-2xl font-bold lg:text-3xl lg:mb-4 '>$100K+</div>
                <div className='text-white/60'>Tusted Wallets Investor</div>
              </div>
            </div>            
          </div>
            <div className='flex items-start gap-x-4'>
            <div className='bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-2xl text-blue lg:text-4xl'>
            < HiGlobe/>
            </div>
            {/* item text */}
            <div>
              <div>
                <div className='text-2xl font-bold lg:text-3xl lg:mb-4 '>20</div>
                <div className='text-white/60'>Countries Supported</div>
              </div>
            </div>            
          </div>
        </div>
      </div>
      </section>;
};

export default Stats;
