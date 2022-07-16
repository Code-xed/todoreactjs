import React, { useState } from 'react';
import './Rhead.css';
import Hamburger from './Hamburger.js';

function Rhead({ham, setHam}) {
  const Hamclick = (event) => {
    window.alert("This Working Outer");
    setHam(!ham);
  };
  return (
    <div className="mx-10">
    <Hamburger ham={ham} setHam={setHam}/>
    </div>
    );
}

export default Rhead;