import React from 'react';


const NewsletterForm = () => {
  return (
  <form className='flex-1 flex flex-col  item-start w-full
  gap-y-6 lg:gap-x-10 lg:flex-row'>
    <input className='input text-base text-black placeholder:text-white ' type="text" placeholder='Enter your email' />
    <button className='btn justify-center text-center 
    bg-white text-darkblue px-4 hover:bg-white/60'>Subscribe</button>
  </form>
  )
};

export default NewsletterForm;
