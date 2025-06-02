import React from 'react';

import { navData } from '../data';

const Nav = () => {
  return <nav className='flex items-center'>
    <ul className='flex gap-x-8 '>
      {navData.map((items,index)=>{
        return <li className='cursor-pointer  border-b-2 border-transparent
        hover:border-blue-600 transition-all duration-200' key={index}>{items.name}</li>
      })}
    </ul>
  </nav>
};

export default Nav;
