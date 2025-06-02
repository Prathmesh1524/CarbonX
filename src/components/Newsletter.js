import React from 'react';
import NewsletterForm from "./NewsletterForm"

const Newsletter = () => {
  return <section className='py-[40px] lg:py-[88px] 
  bg-newsletter bg-cover '>
    <div className=" container mx-auto">
      <div className='flex flex-col lg:flex-row bg-blue-500 
      items-center justify-between p-12 rounded-2xl 
      lg:bg-newsletterBox lg:bg-no-repeat lg:h-[216px]'
      data-aos="fade-up"
      data-aos-delay="400"
      >
        {/* text */}
        <div className=' flex-1 w-full'>
          <h3 className='h3 mb-5'>Start Trading Now.</h3>
          <p className='max-w-[348px] mb-8'>Join now with CarbonX to get the lettest news
            and start mining now.
          </p>
        </div>
          <NewsletterForm/>
      </div>
    </div>
  </section>;
};

export default Newsletter;
