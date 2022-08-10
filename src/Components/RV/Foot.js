import React from 'react';

import LangCard from './LangCard.js';

function Foot() {
  return (
  <>
    <LangCard src="0" content="This Is A Test" />
    <LangCard src="1" content="This Is A Test" />
    <LangCard src="2" content="This Is A Test" />
    <div className="text-center min-w-full shadow-lg shadow-slate-400">
      <h3 className="text-bold text-2xl hover:underline select-none">Built With ❤️ Using Flask And Tailwind</h3>
    </div>
    <div className="flex justify-between flex-col text-white text-center bg-black h-[60vh] bottom-0 select-none break-normal">
      {/* FOOTER LINE*/}
      <svg className="m-0" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path fill="#ffffff" fillOpacity={1} d="M0,192L1440,64L1440,0L0,0Z" />
      </svg>
      <div className="flex flex-col m-0 p-0 ">
        <h1 className="my-4 text-bold text-[2.5rem]">Get Ideas Delivered to You</h1>
        <button className="bg-white text-black rounded-[20px] p-[0.4rem] text-bold text-[14px] hover:text-white hover:bg-prim3 mx-[40vw]">Sign Up</button>
      </div>
      <h2 className="my-[50px]">Copyright © 2022 <strong className="text-underline-red-500">Aditya.</strong><br/>All Rights Reserved.</h2>
    </div>
  </>
    );
}

export default Foot;
