import React, { useState } from 'react';

function Hamburger ({ham, setHam}) {
  const handleClick = (event) => {
    setHam(!ham);
  };
  var val = ham ? "x" : "^";
  return (
    <div className="flex flex-col" onClick={handleClick} >
      <div className={`text-bold text-5xl shadow-md shadow-sky-900 text-${ham ? 'red-500' : 'white'}`}>{val}</div>
    </div>
    );
}

export default Hamburger;