import React from 'react';
import { Transition } from '@headlessui/react';

function Menu({ham, setHam}) {
  return (
    <div className={`flex items-center absolute space-x-1 text-bold text-3xl text-white bg-black h-[100vh] w-[100%] shadow-lg shadow-black top-16 ${ham ? "" : "hidden"}`}>
      <Transition as="ul" 
        enter="translateX duration-40"
        enterFrom="0%"
        enterTo="-100%"
        leave="translateX duration-40"
        leaveFrom="-100%"
        leaveTo="0%"
        show={ham} 
        className="space-y-2 md:inline-flex bg-grey-900 border-white" >
        <li><a href="#" className="px-4 py-2 font-semibold rounded">🏠 Home</a></li>
        <li><a href="#" className="px-4 py-2 font-semibold rounded">😁 About</a></li>
        <li><a href="#" className="px-4 py-2 font-semibold rounded">📞 Contact</a></li>
        <li><a href="#" className="px-4 py-2 font-semibold rounded">🪵 Login</a></li>
      </Transition>
    </div>
    );
}

export default Menu;