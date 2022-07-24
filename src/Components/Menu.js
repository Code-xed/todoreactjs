import React from 'react';
import { Transition } from '@headlessui/react';

function Menu({ham, setHam}) {
  return (
    <div className={`flex items-center space-x-1 text-bold text-3xl text-black bg-prim4 min-h-[30vh] shadow-lg shadow-black ${ham ? "" : "hidden"}`}>
      <Transition as="ul" 
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-40"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={ham} 
        className="space-y-2 md:inline-flex bg-grey-900" >
        <li><a href="#" className="px-4 py-2 font-semibold rounded">🏠 Home</a></li>
        <li><a href="#" className="px-4 py-2 font-semibold rounded">😁 About</a></li>
        <li><a href="#" className="px-4 py-2 font-semibold rounded">📞 Contact</a></li>
        <li><a href="#" className="px-4 py-2 font-semibold rounded">🪵 Login</a></li>
      </Transition>
    </div>
    );
}

export default Menu;