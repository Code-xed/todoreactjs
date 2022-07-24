import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import './but.css';
import Lhead from './Header/Lhead.js';
import Rhead from './Header/Rhead.js';
import Menu from './Menu.js';
{/*import HamburgerIcon from './HamburgerIcon.js';*/}


function Header({ham, setHam}) {
  const [dark, setDark] = useState(false);
  const HandleClick = () => {
    setHam(!ham);
  };
  return (
    <>
      <div className="bg-slate-500" onClick={HandleClick} >
        This site uses cookies
      </div>
    {/*Nav Bar*/}
    <div className="bg-black flex flex-col sticky top-0 border-slate-700">
      <header className="flex justify-between w-full p-2  sm:px-4 shadow-xl">
        <div className="flex max-w-7xl">
          <a href="#">
            <span className="text-3xl font-extrabold text-sky-600">Fudu</span>
          </a>
        </div>
          {/*Hamburger Icon*/}
        <div className="flex-col flex" >
          <Hamburger toggled={ham} toggle={setHam} color="#ffffff" hideOutline="true"/>
             {/* <button className="menu" onclick={HandleClick}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path className={`line line1${ham ? " hamop" : ""}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className={`line line2${ham ? " hamop" : ""}`} d="M 20,50 H 80" />
        <path className={`line line3${ham ? " hamop" : ""}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>*/}
          {/*
          <button className="flex-none px-2" onClick={HandleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="#ffffff">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
             </svg>
            <span className="sr-only">Open Menu</span>
          </button>
          */}
        </div>
          {/*<HamburgerIcon ham={ham} />*/}
      </header>
      {/*Menu*/}
      <Menu ham={ham} setHam={setHam} />
    </div>
   </>
    );
}
export default Header;