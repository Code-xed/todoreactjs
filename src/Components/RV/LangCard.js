import React from 'react';

import py from "../../static/svg/python.svg";
import js from "../../static/svg/js.svg";
import html from "../../static/svg/html5.svg";
function LangCard({src, content}) {
  const srcs = [py, js, html];
  return (
    <div className="flex-inline shadow-lg shadow-prim5 from-prim1 to-prim2 bg-gradient-to-r">
      {/* Icon */}
      <div className="shrink-0">
        <img className="ml-4 w-24 h-24" src={srcs[parseInt(src)]} alt={content ? content : null} />
      </div>
      
      {/* Description */}
      <div className="flex flex-col text-bold text-3xl text-prim1 text-center bg-white">
        <p>{content ? content : null}</p>
      </div>
    </div>
    );
}

export default LangCard;