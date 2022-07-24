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
      <div className={`flex bg-slate-500 ${ dark ? "" : "hidden"}`} onClick={handleDark} >
        <p>This site uses cookies.</p>
        <button onClick=>x</button>
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
        </div>
      </header>
      {/*Menu*/}
      <Menu ham={ham} setHam={setHam} />
    </div>
   </>
    );
}
export default Header;