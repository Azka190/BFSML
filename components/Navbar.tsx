import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-4'>
      <div className='flex justify-between items-center w-full md:w-auto'>
        <img src='BFSL-Logo-Retina.png' alt='logo' className='w-48 h-20 ml-4 md:ml-16 pt-3' />
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:justify-end text-slate-500`}>
        <ul className='flex flex-col md:flex-row text-lg text-pretty pr-4 md:pr-24 pt-5 md:pt-0'>
          <li className='mb-2 md:mb-0 md:pr-10 hover:underline underline-offset-2 hover:font-bold'>Home</li>
          <li className='mb-2 md:mb-0 md:pr-10 hover:underline underline-offset-2 hover:font-bold'>Profile</li>
          <li className='mb-2 md:mb-0 md:pr-10 hover:underline underline-offset-2 hover:font-bold'>Governance</li>
          <li className='mb-2 md:mb-0 md:pr-10 hover:underline underline-offset-2 hover:font-bold'>Investor</li>
          <li className='md:pr-10 hover:underline underline-offset-2 hover:font-bold'>Contact us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
