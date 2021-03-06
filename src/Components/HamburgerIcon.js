import React from 'react';

import './Header.css';

function HamburgerIcon({ham}) {
  return (
    <>
    <div id="nav-icon2" className={`${ham ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div id="nav-icon1">
  <span></span>
  <span></span>
  <span></span>
</div>
<div id="nav-icon3">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
<div id="nav-icon4">
  <span></span>
  <span></span>
  <span></span>
</div>
    </>

    );
}

export default HamburgerIcon;