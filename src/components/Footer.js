import React from 'react';

import Logo from "../assets/img/logo.svg"
import Visalog from "../assets/img/visa.png"
import MastercardImg from "../assets/img/mastercard.png"
import BitcoinImg from "../assets/img/bitcoin.png"
import {
  IoLogoYoutube,
   IoLogoInstagram,
   IoLogoTwitter,
   IoLogoLinkedin
} from "react-icons/io"


const Footer = () => {
  return <footer className='lg:pt-24 pt-0' 
  data-aos="fade-down"
  data-aos-delay="400"
  >
    <div className="container mx-auto lg:mb-24">
    <div className='flex gap-12 flex-col lg:flex-row'>
      {/* logo */}
      <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]'>
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        </div>
      {/* link group */}
      <div className='flex flex-1 flex-col gap-16 lg:flex-row' >
        <div className='text-center lg:text-left w-full'>
          <div className='text-xl font-medium mb-5'>Quick Links</div>
          <ul className='space-y-3 text-gray-300'>
            <li><a className='hover:text-blue' href="#">Home</a></li>
            <li><a className='hover:text-blue' href="#">Products</a></li>
            <li><a  className='hover:text-blue'href="#">About</a></li>
            <li><a className='hover:text-blue' href="#">Features</a></li>
          </ul>

        </div>  
         <div className='text-center lg:text-left w-full'>
          <div className='text-xl font-medium mb-5'>Resourse Links</div>
          <ul className='space-y-3 text-gray-300'>
            <li><a className='hover:text-blue' href="#">Download whitepaper</a></li>
            <li><a className='hover:text-blue' href="#">Smart Token</a></li>
            <li><a  className='hover:text-blue'href="#">Explore Blockchain</a></li>
            <li><a className='hover:text-blue' href="#">Crypto API</a></li>
          </ul>

        </div> 
       
      </div>
      {/* payments */}
      <div className='flex flex-col flex-1'>
        <div className='lg:ml-[80px] '>
        <div className='h3 font-medium text-center mb-10 lg:text-left'>
          We accept the following payment methods
        </div>
        <div className='flex gap-4 mt-4 justify-center items-center'>
          <img src={Visalog} alt="" />
          <img src={MastercardImg} alt="" />
          <img src={BitcoinImg} alt="" />
        </div>
      </div>
      </div>
    </div>
    </div>
    {/* copy & socials */}
    <div className='py-12'>
      <div className="container mx-auto text-center flex flex-col gap-y-6 lg:flex-row justify-between 
      lg:gap-y-0 ">
        <div>&copy; 2025 CarbonX.  All right reserved.</div>
      <div>
        {/* socials */}
        <div className='flex  lg:flex-row text-2xl  justify-center  gap-x-8'>
          <a className='hover:text-blue trasition' href="#"><IoLogoInstagram/></a>
          <a className='hover:text-blue trasition' href="#"><IoLogoTwitter/></a>
          <a className='hover:text-blue trasition' href="#"><IoLogoLinkedin/></a>
          <a className='hover:text-blue trasition' href="#"><IoLogoYoutube/></a>
        </div>
      </div>
      </div>
    </div>
  </footer>
}

export default Footer;
