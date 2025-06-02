import React from 'react';


const CalcForm = () => {
  return <div className='w-full bg-white max-w-[942px] mx-auto text-darkblue p-12 rounded-3xl shadow-primary'
    data-aos="fade-down"
    data-aos-offset="300"
  >
    {/* form */}
      <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-10 lg:space-y-0'>
        <input className="input placeholder:text-darkblue text-darkblue" type="text" placeholder='Enter the ETH' />
        <select className='select'>
            <option value="">TH/s</option>
            <option value="">H/s</option>
            <option value="">KH/s</option>
            <option value="">MH/s</option>
            <option value="">GH/s</option>
          </select> 
          <button className='btn px-10 flex self-start text-white sm:justify-center items-center'> Calculate</button>
      </form>
      <div className='mt-10 '>
        <div className='font-semibold mb-3 text-blue/85'>Estemated 24 hour value :</div>
        <div className='text-[32px] font-bold mb-5 '>0.0023 134 44 ETH 
              <span className='text-blue/95'> ($1224)</span>
          </div>
      </div>
      <div className='text-gray-500'>Value will change based on mining difficulty and Ethereum price.</div>
    </div>;
};

export default CalcForm;
