import React from 'react';
import { Transition } from '@headlessui/react';
import Lhead from './Header/Lhead.js';
import Rhead from './Header/Rhead.js';

function Header({ham, setHam}) {
  const HandleClick = () => {
    setHam(!ham);
  };
  return (
    <>
    <div className="bg-gray-100">
  <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
    <div className="flex items-center justify-between mx-auto max-w-7xl">
      <a href="#">
        <span className="text-2xl font-extrabold text-blue-600">Fudu</span>
      </a>
      
      
      <div className="flex items-center space-x-1 text-bold text-3xl">
        <Transition as="ul" 
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={ham} 
            className={`space-x-2 md:inline-flex ${ham ? "h" : "h"}`} >
          <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Home</a></li>
          <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Blogs</a></li>
          <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">GitHub</a></li>
          <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Contact Us</a></li>
        </Transition>
        
        
        <div className="inline-flex md:hidden" onClick={HandleClick} >
          <button className="flex-none px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>
            <span className="sr-only">Open Menu</span>
          </button>
        </div>
      </div>
    </div>
  </header>
 </div>
 </>
    );
}
export default Header;