import React from 'react';

import pfp from '../../static/img/pfp.jpg';

function UserCard() {
  return (
    <div className="break-normal h-screen overflow-hidden flex items-center justify-center shadow-md shadow-black">
      <div className="flex items-center justify-center h-screen">
        <div className="from-slate-700 bg-gradient-to-r to-blue-600 font-bold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
          <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={pfp} alt="product designer" />
          <strong className="text-lg text-stone-100">Aditya Nayak</strong>
          <h3 className="text-sm text-stone-400 ">Creative Director</h3>
          <p className="text-xl text-white mt-4">{" "}A 19 Year Old, Aspiring Software Engineer. I mostly do full-stacks development, web apps. From 🇮🇳{" "}</p>
          <button className="select-none from-slate-800 bg-gradient-to-r to-slate-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:from-red-700 hover:to-red-700 hover:text-slate-200">Lets talk!</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;