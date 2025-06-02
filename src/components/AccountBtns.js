import React from 'react';


const AccountBtns = () => {
  return <div className='flex items-center font-medium gap-x-3'>
  <a className='hover:text-blue-500' href="#">Login</a>
  <span className='mx-6'>|</span>
  <a className='btn h-[52px] text-base px-6
    hover:to-blue-700' href="#">Register</a>
  </div>
};

export default AccountBtns;
