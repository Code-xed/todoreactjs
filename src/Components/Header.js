import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import Menu from './Menu.js';


function Header({ham, setHam}) {
  const [dark, setDark] = useState(true);
  const handleClick = () => {
    setHam(!ham);
  };
  const handleDark = () => {
    setDark(!dark);
  };
  return (
    <>
      <div className={`flex space-between mx-1 p-0 bg-slate-500 ${ dark ? "" : "hidden"}`} onClick={handleDark} >
        <p className="left-0">This site uses cookies.</p>
        <button className="text-white text-2xl text-extrabold right-2 shadow-red-500" onClick={handleDark}>x</button>
      </div>
      {/*Nav Bar*/}
      <div className="bg-white flex flex-col sticky top-0 border-slate-700">
        <header className={`flex justify-between w-full p-2  sm:px-4 shadow-xl shadow-${ ham ? "red-500" : "black"}`}>
          <div className="flex max-w-7xl">
            <a href="#">
              <span className="text-3xl font-extrabold text-prim2">Fudu</span>
            </a>
          </div>
          {/*Hamburger Icon*/}
          <div className="flex-col flex" >
            <Hamburger toggled={ham} toggle={setHam} color="#000000" hideOutline="true"/>
          </div>
        </header>
        {/*Menu*/}
        <Menu ham={ham} setHam={setHam} />
      </div>
   </>
  );
}
export default Header;