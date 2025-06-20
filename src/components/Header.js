import React from 'react';

import Logo from "../assets/img/logo.svg"
import Nav from "./Nav"
import AccountBtn from "./AccountBtns"

import {CgMenuRight} from "react-icons/cg"
const Header = ({setNavMobile}) => {
  return <header className='py-[30px] lg:py-[48px]'
    data-aos="fade-down"
          data-aos-delay="900"
          data-aos-duration="2000"
          >
    <div className="container mx-auto flex items-center justify-between">
      {/* logo */}
      <a href="#" 
          >
        <img src={Logo} alt="" />
      </a>
      {/* Nav */}
      <div className='hidden lg:flex gap-x-[55px]'>
        <Nav  />
        <AccountBtn />
      </div>
      <div onClick={()=> setNavMobile(true)} className='lg:hidden cursor-pointer'
          >  
      <CgMenuRight className='text-2xl '/>
      </div>
    </div>
  </header>;
};

export default Header;
